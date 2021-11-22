import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const Astronomy = (props) => {
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
        Sunrise {props.astronomy.sunrise}
      </Typography>
      <Typography variant="p">
        Sunset {props.astronomy.sunset}
      </Typography>
    </Card>
  );
};
