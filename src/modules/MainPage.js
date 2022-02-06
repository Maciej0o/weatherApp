import { useEffect, useState } from 'react';
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
import { useForecast } from './useForecast';

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
  const [city, setCity] = useState('Warsaw');

  const {
    currentWeather,
    locationWeather,
    error,
    loading,
    forecast,
    astronomy,
    fetchCurrentWeather,
  } = useForecast();

  useEffect(() => {
    const date = new Date();

    let actualDate =
      date.getFullYear() +
      '-' +
      date.getMonth() +
      '-' +
      date.getDate();
    fetchCurrentWeather(city, actualDate);
  }, [city, fetchCurrentWeather]);

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
