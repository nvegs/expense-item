import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  /** Condition to filter year **/
  if (props.filteredExpenses.length === 0) {
    return (
      <p className="text-center text-sky-50 text-xl py-4 font-bold">
        NO EXPENSES FOUND
      </p>
    );
  }

  /** Condition to filter expenses to be outputed **/
  return (
    <ul>
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
