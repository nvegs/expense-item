const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col items-center justify-center border-2 rounded-lg w-[5.5rem] py-1 text-sky-50 bg-[#2a2a2a]">
      <div className="font-bold text-xl">{month}</div>
      <div className="text-xl">{year}</div>
      <div className="font-semibold text-4xl">{day}</div>
    </div>
  );
};

export default ExpenseDate;
