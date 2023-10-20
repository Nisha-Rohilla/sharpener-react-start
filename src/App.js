import ExpenseItem from './components/ExpenseItem';
import './App.css';
import Expense from './components/Expense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      localExpenditure:"Pune"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),localExpenditure:"Delhi" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      localExpenditure:"Mumbai"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      localExpenditure:"Banglore"
    },
  ];
  return (
    <div className="App">
      {/* <ExpenseItem/> */}
      {expenses.map((expense,index)=>(
        <Expense 
        key = {index}
        title = {expense.title}
        date ={expense.date}
        amount={expense.amount}
        localExpenditure={expense.localExpenditure} />
      ))}
    </div>
  );
}

export default App;
