import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { searchApi } from '../api';

export const CityAutocomplete = ({ onCitySelect }) => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const res = await searchApi.get('', {
          params: {
            q: city,
          },
        });
        setCities(res.data);
      } catch (e) {
        console.error('Error while fetching cities', e);
      } finally {
        setLoading(false);
      }
    };
    city.length >= 3 && fetchCities();
  }, [city]);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={cities}
      sx={{ width: 300 }}
      style={{
        padding: '20px 0',
      }}
      renderInput={(params) => (
        <TextField {...params} label="Enter city" />
      )}
      getOptionLabel={(opt) => opt.name}
      onInputChange={(event, newInputValue) => {
        setCity(newInputValue);
      }}
      onChange={(event, newValue) => {
        newValue?.name && onCitySelect(newValue.name);
      }}
      loading={loading}
      isOptionEqualToValue={(option, value) =>
        option.name === value.name
      }
    />
  );
};
