import './App.css';
import Expenses from './Components/Expenses';

function App() {
  const expenses = [
    { date: new Date(2022, 4, 1), title: 'Car', amount: 200 },
    { date: new Date(2022, 4, 5), title: 'Fuel', amount: 150 },
    { date: new Date(2022, 4, 9), title: 'Misc', amount: 150 },
    { date: new Date(2022, 4, 10), title: 'Food', amount: 250 }
  ];
  return (
    <div className='App'>
      <h1>Monthly Expenses</h1>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
