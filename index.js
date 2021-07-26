import axios from 'axios';
import { FIXER_API, REST_COUNTRIES_API } from './api-keys.js';

// Async/Await
// Returns Promises

// Fetch Data about currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
  const { data: { rates } } = await axios.get(FIXER_API);

  console.log(rates.USD);

  const currency = 1 / rates[fromCurrency];
  const exchangeRate = currency * rates[toCurrency];

  return exchangeRate;

};


// Fetch Data about countries
const getCountries = async (currencyCode) => {
  const { data } = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`); 

  const countries = data.map(({ name }) => name);

  return countries;
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  // Runs simulataneously
  const [countries, exchangeRate] = await Promise.all([
    getCountries(toCurrency),
    getExchangeRate(fromCurrency, toCurrency),
  ]);

  console.log(countries);
  console.log(exchangeRate);
};

convertCurrency('AUD', 'USD', 20);

// Output data