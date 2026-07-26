// --- Data layer (see docs/API.md for full contract) ---

let stockDataset = null; // cached in-memory after first load

async function loadStockDataset() {
  if (stockDataset) return stockDataset; // already loaded this session
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

// --- Foundation wiring (Day 3 only — raw display, no styling/rule engine yet) ---

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');

async function handleSearch() {
  resultsDiv.textContent = 'Loading...';
  try {
    const dataset = await loadStockDataset();
    const { result, reason } = searchStock(searchInput.value, dataset);

    if (reason === 'empty') {
      resultsDiv.textContent = 'Please enter a company name or ticker.';
    } else if (reason === 'not_found') {
      resultsDiv.textContent = "Couldn't find that stock — check the spelling or try a different ticker.";
    } else {
      // Day 3: raw display only. Day 4 replaces this with the real Snapshot card.
      resultsDiv.textContent = JSON.stringify(result, null, 2);
    }
  } catch (err) {
    console.error(err);
    resultsDiv.textContent = 'Something went wrong loading stock data. Please refresh.';
  }
}

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});