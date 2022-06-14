import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filtered, setFiltered] = useState("2022");

  const onSelectedFilter = (selectedFilter) => {
    setFiltered(selectedFilter);
  };

  /** Condition to filter year **/
  const filteredExpenses = props.items.filter((filterYear) => {
    if (filterYear.date.getFullYear().toString() === filtered) {
      return true;
    }
  });

  

  return (
    <Card className="flex flex-col mx-auto bg-black max-w-4xl md:p-4 p-2 rounded-xl">
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpenseFilter selected={filtered} onSelected={onSelectedFilter} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
