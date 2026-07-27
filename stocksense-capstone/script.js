// --- Data layer (see docs/API.md for full contract) ---

let stockDataset = null; // cached in-memory after first load

async function loadStockDataset() {
  if (stockDataset) return stockDataset;
  const response = await fetch('data/stocks.json');
  if (!response.ok) throw new Error('Failed to load stock data');
  const data = await response.json();
  if (!data.stocks || !Array.isArray(data.stocks) || data.stocks.length === 0) {
    throw new Error('Stock dataset is empty or malformed');
  }
  stockDataset = data;
  return stockDataset;
}

function searchStock(query, dataset) {
  const trimmed = (query || '').trim().toLowerCase();
  if (!trimmed) return { result: null, reason: 'empty' };

  const match = dataset.stocks.find((stock) => {
    if (stock.ticker.toLowerCase() === trimmed) return true;
    if (stock.companyName.toLowerCase().includes(trimmed)) return true;
    if (stock.searchAliases && stock.searchAliases.some((a) => a.toLowerCase().includes(trimmed))) return true;
    return false;
  });

  return { result: match || null, reason: match ? 'found' : 'not_found' };
}

// --- Formatting helpers (docs/API.md §4) ---

function formatCurrency(value) {
  if (value === null || value === undefined || isNaN(value)) return 'N/A';
  return '₹' + value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatLargeNumber(value) {
  if (value === null || value === undefined || isNaN(value)) return 'N/A';
  const crore = 1e7;
  const crores = value / crore;
  if (crores >= 100000) {
    return '₹' + (crores / 100000).toFixed(2) + ' Lakh Cr';
  } else if (crores >= 1) {
    return '₹' + crores.toFixed(2) + ' Cr';
  }
  return formatCurrency(value);
}

function formatDate(isoDateString) {
  if (!isoDateString) return 'N/A';
  const d = new Date(isoDateString);
  if (isNaN(d.getTime())) return isoDateString;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatPercent(value) {
  if (value === null || value === undefined || isNaN(value)) return 'N/A';
  return value.toFixed(1) + '%';
}

function formatPlain(value, decimals = 1) {
  if (value === null || value === undefined || isNaN(value)) return 'N/A';
  return value.toFixed(decimals);
}

// --- Ratio rule engine (Day 5) — docs/API.md getRatioAssessment() ---
// Thresholds are intentionally simple, transparent educational guidelines — not
// professional-grade or sector-adjusted financial analysis. Disclosed on-page.

const RATIO_CONFIG = [
  {
    key: 'peRatio',
    label: 'P/E Ratio',
    explanation: 'How much investors are paying for each ₹1 of profit. Lower can mean better value, but very low can also signal the market has doubts.',
    formatter: (v) => formatPlain(v, 1),
    assess: (v) => {
      if (v === null || v === undefined) return null;
      if (v < 15) return 'Good';
      if (v <= 30) return 'Average';
      return 'Concerning';
    },
  },
  {
    key: 'eps',
    label: 'EPS (Earnings Per Share)',
    explanation: 'The profit the company earns for every single share outstanding. Higher generally means the company is more profitable per share.',
    formatter: (v) => (v === null || v === undefined ? 'N/A' : formatCurrency(v)),
    assess: (v) => {
      if (v === null || v === undefined) return null;
      if (v > 50) return 'Good';
      if (v >= 10) return 'Average';
      return 'Concerning';
    },
  },
  {
    key: 'dividendYield',
    label: 'Dividend Yield',
    explanation: 'The percentage of the share price paid back to investors each year as dividends. Higher can mean steady income, but very high can sometimes signal limited growth plans.',
    formatter: (v) => formatPercent(v),
    assess: (v) => {
      if (v === null || v === undefined) return null;
      if (v >= 2) return 'Good';
      if (v >= 0.5) return 'Average';
      return 'Concerning';
    },
  },
  {
    key: 'debtToEquity',
    label: 'Debt-to-Equity',
    explanation: 'How much debt the company uses compared to its own funds. Lower generally means less financial risk.',
    formatter: (v) => formatPlain(v, 2),
    assess: (v) => {
      if (v === null || v === undefined) return null;
      if (v < 0.5) return 'Good';
      if (v <= 1.5) return 'Average';
      return 'Concerning';
    },
  },
];

const STATUS_COLOR = {
  Good: 'good',
  Average: 'average',
  Concerning: 'concerning',
  Unknown: 'unknown',
};

function getRatioAssessment(ratios) {
  if (!ratios) return [];
  return RATIO_CONFIG.map((config) => {
    const rawValue = ratios[config.key];
    const hasValue = rawValue !== null && rawValue !== undefined && !isNaN(rawValue);
    const status = hasValue ? config.assess(rawValue) : 'Unknown';
    return {
      label: config.label,
      explanation: config.explanation,
      displayValue: hasValue ? config.formatter(rawValue) : 'Data not available',
      status: status,
      statusColor: STATUS_COLOR[status] || 'unknown',
    };
  });
}

// --- Snapshot rendering (Day 4) ---

function renderSnapshot(stock) {
  return `
    <div class="snapshot-card">
      <div class="snapshot-header">
        <h2 class="snapshot-company-name">${escapeHtml(stock.companyName)}</h2>
        <span class="snapshot-ticker">${escapeHtml(stock.ticker)}</span>
      </div>

      <span class="snapshot-sector">${escapeHtml(stock.sector)}</span>

      <div class="snapshot-price-row">
        <div>
          <div class="snapshot-stat-label">Price</div>
          <div class="snapshot-stat-value">${formatCurrency(stock.price)}</div>
        </div>
        <div>
          <div class="snapshot-stat-label">Market Cap</div>
          <div class="snapshot-stat-value">${formatLargeNumber(stock.marketCap)}</div>
        </div>
      </div>

      <p class="snapshot-description">${escapeHtml(stock.description)}</p>

      <div class="snapshot-updated">Data as of: ${formatDate(stock.lastUpdated)}</div>
    </div>
  `;
}

// --- Ratios rendering (Day 5) ---

function renderRatios(ratios) {
  const rows = getRatioAssessment(ratios);

  if (rows.length === 0) {
    return `
      <div class="ratios-card">
        <h3 class="section-title">Key Ratios, Explained</h3>
        <p class="ratios-empty">Ratio data not available for this stock.</p>
      </div>
    `;
  }

  const rowsHtml = rows.map((row) => `
    <div class="ratio-row">
      <div class="ratio-row-top">
        <span class="ratio-label">${escapeHtml(row.label)}</span>
        <span class="ratio-badge ratio-badge-${row.statusColor}">${escapeHtml(row.status)}</span>
      </div>
      <div class="ratio-value">${escapeHtml(row.displayValue)}</div>
      <div class="ratio-explanation">${escapeHtml(row.explanation)}</div>
    </div>
  `).join('');

  return `
    <div class="ratios-card">
      <h3 class="section-title">Key Ratios, Explained</h3>
      ${rowsHtml}
      <p class="ratios-disclaimer">⚠ These are simplified educational guidelines, not financial advice.</p>
    </div>
  `;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// --- UI wiring ---

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');

async function handleSearch() {
  resultsDiv.innerHTML = '<p class="loading-message">Loading...</p>';
  try {
    const dataset = await loadStockDataset();
    const { result, reason } = searchStock(searchInput.value, dataset);

    if (reason === 'empty') {
      resultsDiv.innerHTML = '<p class="error-message">Please enter a company name or ticker.</p>';
    } else if (reason === 'not_found') {
      resultsDiv.innerHTML = '<p class="error-message">Couldn\'t find that stock — check the spelling or try a different ticker (e.g. TCS, INFY, RELIANCE).</p>';
    } else {
      resultsDiv.innerHTML = renderSnapshot(result) + renderRatios(result.ratios);
      // Red Flags section arrives Day 6 — intentionally not rendered yet.
    }
  } catch (err) {
    console.error(err);
    resultsDiv.innerHTML = '<p class="error-message">Something went wrong loading stock data. Please refresh.</p>';
  }
}

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});