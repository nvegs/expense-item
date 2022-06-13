import ExpenseDate from "./ExepnseDate";

const ExpenseItem = (props) => {
  return (
    <li className="flex justify-between bg-[#4b4b4b] my-1 rounded-2xl text-2xl p-2 shadow-md items-center gap-10">
      <ExpenseDate date={props.date} />
      <div className="flex md:flex-row flex-1 flex-col-reverse md:items-center items-end justify-start gap-4 text-sky-50">
        <h2 className="text-xl md:text-3xl font-semibold flex-1">
          {props.title}
        </h2>
        <div className="border border-sky-50 bg-[#40005d] rounded-2xl font-black px-6 py-2">
          ${props.amount}
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
