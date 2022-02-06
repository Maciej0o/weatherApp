import { useState, useCallback } from 'react';
import { weatherApi, astronomyApi } from '../api';

export const useForecast = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [locationWeather, setLocationWeather] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState(null);
  const [astronomy, setAstronomy] = useState(null);

  const fetchCurrentWeather = useCallback(
    async (city, actualDate) => {
      setLoading(true);
      try {
        const [res, res1] = await Promise.all([
          weatherApi.get('', {
            params: {
              q: city,
              days: '7',
              aqi: 'no',
            },
          }),
          astronomyApi.get('', {
            params: {
              q: city,
              dt: actualDate,
            },
          }),
        ]);
        setCurrentWeather(res.data.current);
        setLocationWeather(res.data.location);
        setForecast(res.data.forecast.forecastday);
        setAstronomy(res1.data.astronomy.astro);
      } catch (e) {
        console.error('Error while fetching current weather', e);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    currentWeather,
    locationWeather,
    error,
    loading,
    forecast,
    astronomy,
    fetchCurrentWeather,
  };
};
