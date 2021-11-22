import Alert from '@mui/material/Alert';

export const AlertWind = (props) => {
  return (
    <div>
      {props.currentWeather > 40 && (
        <Alert severity="error">
          Ostrzeżenie! Spodziewaj się bardzo silengo wiatru!
        </Alert>
      )}
      {props.currentWeather > 20 && props.currentWeather < 40 && (
        <Alert severity="warning">
          Ostrzeżenie! Spodziewaj się silengo wiatru!
        </Alert>
      )}
      {props.currentWeather > 15 && props.currentWeather < 20 && (
        <Alert severity="info">Może występować lekki wiatr.</Alert>
      )}
    </div>
  );
};
