import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const [closeButton, setCloseButton] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const SetCloseButtonHandler = (stateChange) => {
    setCloseButton(stateChange);
  }

  const setOpenButtonHandler = () => {
    setCloseButton((prevCloseButton) => !prevCloseButton);
  }

  return (
      <div>
      {closeButton && <ExpenseForm onSetCloseButton={SetCloseButtonHandler} onSaveExpenseData={saveExpenseData} />}

      {!closeButton && <Card className="max-w-4xl mx-auto text-center my-4 p-4 rounded-lg bg-[#a892ee]">
         <button type="button" onClick={setOpenButtonHandler} className="text-sky-50 md:w-96 w-full border px-6 py-2 rounded-md bg-[#40005d]">
            Add Expenses
        </button>
     </Card>}
      </div>
  );
};

export default NewExpense;
