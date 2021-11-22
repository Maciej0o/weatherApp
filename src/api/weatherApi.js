import axios from 'axios';

const WEARHER_API_KEY = 'aff22f73ccc8478797645251210811';

// https://github.com/axios/axios

export const weatherApi = axios.create({
  baseURL: `http://api.weatherapi.com/v1/forecast.json?key=${WEARHER_API_KEY}`,
  timeout: 2000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

export const searchApi = axios.create({
  baseURL: `http://api.weatherapi.com/v1/search.json?key=${WEARHER_API_KEY}`,
  timeout: 2000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

export const astronomyApi = axios.create({
  baseURL: `http://api.weatherapi.com/v1/astronomy.json?key=${WEARHER_API_KEY}`,
  timeout: 2000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});
