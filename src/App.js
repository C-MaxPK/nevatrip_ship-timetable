import { useState } from 'react';
import { useSelector } from 'react-redux';
import Route from './Components/Route';
import TicketFromA from './Components/TicketFromA';
import TicketFromB from './Components/TicketFromB';
import TicketComposite from './Components/TicketComposite';
import QuantityOfTickets from './Components/QuantityOfTickets';
import Result from './Components/Result';
import { selectRoute } from './store/ticketSlice';
import './App.css';

function App() {
  const [ showResult, setShowResult ] = useState(false);
  const route = useSelector(selectRoute);

  return (
    <div className="App">
      <Route />
      {route === 'из A в B' && <TicketFromA/>}
      {route === 'из B в A' && <TicketFromB />}
      {route === 'из A в B и обратно в А' && <TicketComposite/>}
      <QuantityOfTickets />
      {!showResult && <button onClick={() => setShowResult(true)}>Посчитать</button>}
      {showResult && <Result />}
    </div>
  );
}

export default App;
