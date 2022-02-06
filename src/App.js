import { useState } from 'react';
import './App.css';
import { WeatherContext } from './state/WeatherContext';

import { MainPage } from './modules/MainPage';

function App() {
  const [context, setContext] = useState({
    city: 'Krakow',
  });

  const contextValue = {
    city: context.city,
    setCity: (city) => setContext({ city }),
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <MainPage />
        </header>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
