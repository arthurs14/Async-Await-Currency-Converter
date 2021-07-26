import axios from 'axios';
import { FIXER_API, REST_COUNTRIES_API } from './api-keys.js';

// Async/Await
// Returns Promises

// Fetch Data about currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
  const { data: { rates } } = await axios.get(FIXER_API);

  console.log(rates.USD);

  const euro = 1 / rates[fromCurrency];
  console.log('conversion USD to Euro:', euro);

  const exchangeRate = euro * rates[toCurrency];
  console.log('conversion:', exchangeRate);
};

getExchangeRate('USD', 'AUD');

// Fetch Data about countries

// Output data