import React from "react";

const ExpenseFilter = (props) => {
  const onChangeFilterHandler = (e) => {
    props.onSelected(e.target.value);
  };
  return (
    <div className="flex items-center justify-between my-2 px-2">
      <span className="text-sky-50 font-bold text-xl">
        <h1>Filter by year</h1>
      </span>
      <div>
        <select
          value={props.selected}
          className="w-32 text-center h-10 px-2 text-xl font-bold rounded-lg"
          onChange={onChangeFilterHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
