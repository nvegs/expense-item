import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="flex flex-col items-center h-[100%]">
      <div className="flex flex-col justify-end overflow-hidden w-[100%] h-[100%] border-[#313131] bg-[#c3b4f3] rounded-xl">
        <div
          className="bg-[#4826b9] w-[100%] transition-all duration-[0.3s] ease-out"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="font-bold text-sm text-center">{props.label}</div>
    </div>
  );
};

export default ChartBar;
