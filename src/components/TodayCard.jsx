import { CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const TodayCard = (props) => {
  return (
    <Card
      variant="outlined"
      style={{
        padding: 20,
        background:
          'linear-gradient(86deg, rgba(45,45,121,1) 0%, rgba(58,125,238,1) 100%)',
        color: '#ffffff',
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          style={{ fontWeight: 'bold', paddingBottom: 20 }}
        >
          {props.locationWeather}
        </Typography>
        {!!props.currentWeather?.temp_c && (
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
            }}
          >
            {props.currentWeather.temp_c}°C
          </Typography>
        )}
        <img src={props.currentWeather.condition.icon} alt="" />
        <Typography variant="h4">
          {props.currentWeather.condition.text}
        </Typography>

        <Typography variant="p">{props.date}</Typography>
      </CardContent>
    </Card>
  );
};
