import { useEffect, useState } from 'react';
import { weatherApi, astronomyApi } from '../api';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { TodayCard } from '../components/TodayCard';
import { WeekWeather } from '../components/WeekWeather';
import { CityAutocomplete } from '../components/CityAutocomplete';
import { AlertWind } from '../components/AlertWind';
import { Astronomy } from '../components/Astronomy';

/*
Poprawki css

Z boku informacja o zbyt silnym wietrze.
- Wiatr bardzo słaby - nie wyświetlamy nic
- Wiatr średni - jakas ikonka
- Wiatr duży - informacja o zagrożeniu

Osobna strona, ktora pokazuje wsch/zach
lub - wykonanie drugiego osobnego requestu i wyświetlenie wszystkiego razem.

https://www.weatherapi.com/api-explorer.aspx#astronomy

*/

export const MainPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [locationWeather, setLocationWeather] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Warsaw');
  const [forecast, setForecast] = useState(null);
  const [astronomy, setAstronomy] = useState(null);

  const date = new Date();
  let actualDate =
    date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
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
    };
    fetchCurrentWeather();
  }, [actualDate, city]);

  return (
    <Container maxWidth="md">
      <Box sx={{ height: '100vh', margin: '20px' }}>
        <Typography
          variant="h1"
          style={{
            color: '#000000',
            fontSize: 60,
            paddingTop: 10,
            fontWeight: 'bold',
          }}
        >
          WEATHER APP
        </Typography>
        <CityAutocomplete onCitySelect={setCity} />
        {loading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AlertWind currentWeather={currentWeather.wind_kph} />
              <TodayCard
                locationWeather={locationWeather.name}
                date={locationWeather.localtime}
                currentWeather={currentWeather}
              />
            </Grid>
            <Grid item xs={12}>
              <Astronomy astronomy={astronomy} />
            </Grid>
            <Grid item xs={12}>
              <WeekWeather forecast={forecast} />
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};
