import { useState } from "react";

export default function ButtonClicksCount() {
  const [count, setCount] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });
  function handleClick(keyName) {
    setCount((prev) => ({
      ...prev,
      [keyName]: prev[keyName] + 1,
    }));
  }

  return (
    <div className="flex items-center justify-center flex-wrap w-40 mt-[200px] ml-[200px]">
      <div
        className=" flex w-20 h-20 border border-black items-center pl-8"
        onClick={() => handleClick("count1")}
      >
        {count.count1}
      </div>
      <div
        className="flex w-20 h-20 border border-black items-center pl-8"
        onClick={() => handleClick("count2")}
      >
        {count.count2}
      </div>
      <div
        className="flex w-20 h-20 border border-black items-center pl-8"
        onClick={() => handleClick("count3")}
      >
        {count.count3}
      </div>
      <div
        className="flex w-20 h-20 border border-black items-center pl-8"
        onClick={() => handleClick("count4")}
      >
        {count.count4}
      </div>
    </div>
  );
}
