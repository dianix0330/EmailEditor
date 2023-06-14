import { useState } from "react";

export default function Toggle({ label, value, onToggleEvent }) {
  const [isChecked, setIsChecked] = useState(value);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
    onToggleEvent();
  };

  return (
    <div className="flex flex-row mt-5 mb-5">
      <label className="mr-2 font-serif ml-2 font-bold" htmlFor="toggle">
        {label}
      </label>
      <input type="checkbox" className="hidden" onClick={toggleChecked} id="toggle" />
      <div
        className={`w-12 h-6 rounded-full bg-gray-100 ${
          isChecked ? "bg-blue-500" : ""
        }`}
        onClick={toggleChecked}
      >
        <div
          className={`transform w-6 h-6 rounded-full bg-white shadow-md ${
            isChecked ? "translate-x-6" : "translate-none"
          }`}
        ></div>
      </div>
    </div>
  );
}
