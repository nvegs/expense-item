import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  return (
    <>
      <div>
        <ExpenseForm onSaveExpenseData={saveExpenseData} />
      </div>
    </>
  );
};

export default NewExpense;
