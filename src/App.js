import { useEffect, useState } from 'react';
import './App.css';
import * as API from './Service/launches'

function App() {
  const [tickets, setTickets] = useState()

  useEffect(() => {
    API.GetUsers().then(setTickets)
  },[])

  console.log(tickets)
  return (
    <h1>Test</h1>
  );
}

export default App;
