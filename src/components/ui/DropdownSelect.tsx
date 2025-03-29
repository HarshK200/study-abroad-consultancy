import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const DropDownInput = ({
  id,
  options,
}: {
  id?: string;
  options: any[];
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>(options[0]);

  return (
    <div className="relative" id={id}>
      <button
        type="button"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="cursor-pointer w-full text-sm rounded-md shadow-xs py-1.5 border-[1px] border-gray-300 focus:border-gray-400"
      >
        <div className="flex gap-2 justify-between items-center px-2 whitespace-nowrap">
          {value}
          {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>
      {isDropdownOpen && (
        <ul className="absolute top-[100%] left-[50%] translate-x-[-50%] flex flex-col w-full">
          {options.map((option, idx) => {
            return (
              <li
                key={option}
                className={`cursor-pointer whitespace-nowrap bg-white px-3 py-1.5 border-[1px] ${idx === 0 ? "border-t-[1px]" : "border-t-0"} border-gray-300 focus:border-gray-400 hover:bg-gray-100`}
                onClick={() => {
                  setValue(option);
                  setIsDropdownOpen(false);
                }}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
