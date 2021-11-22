import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardContent } from '@mui/material';

export const WeekWeather = (props) => {
  return (
    <Grid container spacing={2}>
      {props.forecast.map((el, i) => (
        <Grid item xs={4} key={i}>
          <Card
            key={i}
            style={{
              background: '#0d4ab1',
              color: '#ffffff',
              height: 240,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <Typography style={{ fontSize: 14 }}>
                {el.date}
              </Typography>
              <Typography
                variant="h5"
                style={{
                  fontSize: 26,
                  padding: 15,
                  fontWeight: 'bold',
                }}
              >
                {el.day.avgtemp_c}°C
              </Typography>

              <img src={el.hour[0].condition.icon} alt="" />
              <Typography variant="h5" style={{ fontSize: 20 }}>
                {el.day.condition.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
