import { useContext } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { WeatherContext } from '../state/WeatherContext';

export const Astronomy = (props) => {
  const context = useContext(WeatherContext);

  console.log(context);

  return (
    <Card
      style={{
        background:
          'linear-gradient(254deg, rgba(24,24,24,1) 0%, rgba(74,74,74,1) 100%)',
        color: '#ffffff',
        padding: 20,
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 20,
      }}
    >
      <Typography variant="p">
        Sunrise {context.city} {props.astronomy.sunrise}
      </Typography>
      <Typography variant="p">
        Sunset {props.astronomy.sunset}
      </Typography>
    </Card>
  );
};
