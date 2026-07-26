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

    <div id="ratios-section"></div>
    <div id="red-flags-section"></div>
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
      resultsDiv.innerHTML = renderSnapshot(result);
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