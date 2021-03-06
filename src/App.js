// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseData = (expenseData) => {
    /** Update the new input expenses **/

    /** Method 1 **/
    // setExpenses([expenseData, ...expenses]);

    /** Method 2 **/
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddNewExpense={addNewExpenseData} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
