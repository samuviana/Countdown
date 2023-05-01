import Title from './components/Title';
import Counter from './components/Counter';

import Relogio from "./assets/Relogio.jpg";

import useCountdown from './hooks/useCountdown';

import "./App.css";

function App() {
  const [day, hour, minute, second] = useCountdown("jan 1, 2024 00:00:00");

  return (
    <div className="App" style={{backgroundImage: `url(${Relogio})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2024" /> 
        <div className="contdown-container">
          <Counter title="dias" number={day} />
          <Counter title="horas" number={hour} />
          <Counter title="minutos" number={minute} />
          <Counter title="segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App
