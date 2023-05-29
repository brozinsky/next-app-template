import {useState, Fragment} from "react";
import {Listbox} from "@headlessui/react";

type Option = {
  id: number;
  name: string;
};

interface Props {
  options: Option[];
}

function Select({options}: Props) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative w-[250px]">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button className="flex justify-between w-full border border-dark-50  text-white bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-cente">
          {selectedOption.name}
          <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </Listbox.Button>
        <Listbox.Options className={"rounded-lg absolute bg-elevation-500 top-12 w-full py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col "}>
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option} as={Fragment}>
              {({active, selected}) => (
                <li className={`cursor-pointer block px-4 py-2 ${selected ? "bg-elevation-800" : ""} ${active ? "bg-elevation-800" : ""}`}>
                  {option.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default Select;
