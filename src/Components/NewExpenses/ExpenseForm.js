import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState();
  const [enterAmount, setEnterAmount] = useState();
  const [enterDate, setEnterDate] = useState();

  const onChangeTitle = (e) => {
    setEnterTitle(e.target.value);
  };

  const onChangeAmount = (e) => {
    setEnterAmount(e.target.value);
  };

  const onChangeDate = (e) => {
    setEnterDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");

    props.onSaveExpenseData(expenseData);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="max-w-4xl mx-auto my-4 p-4 rounded-lg bg-[#a892ee]"
      >
        <div className="flex flex-wrap items-center font-bold">
          <div className="flex flex-col gap-4 mx-4 my-2">
            <label>Title</label>
            <input
              type="text"
              value={enterTitle}
              onChange={onChangeTitle}
              className="w-80 h-10 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-4 mx-4 my-2">
            <label>Amount</label>
            <input
              type="number"
              value={enterAmount}
              onChange={onChangeAmount}
              className="w-80 h-10 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-4 mx-4 my-2">
            <label>Date</label>
            <input
              type="Date"
              value={enterDate}
              onChange={onChangeDate}
              min="2019-1-1"
              max="2022-12-01"
              className="w-80 h-10 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex justify-end my-4">
          <button className="text-sky-50 md:w-auto w-full border px-6 py-2 rounded-md bg-[#40005d]">
            Add Expenses
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
