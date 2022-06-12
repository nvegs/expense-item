import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filtered, setFiltered] = useState("2022");

  const onSelectedFilter = (selectedFilter) => {
    setFiltered(selectedFilter);
  };

  return (
    <Card className="flex flex-col mx-auto bg-black max-w-4xl md:p-4 p-2 rounded-xl">
      <ExpenseFilter selected={filtered} onSelected={onSelectedFilter} />
      {props.items.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}  date={expense.date}/> ))}
    </Card>
  );
};

export default Expenses;
