import React from "react";

interface Props {
    label: string;
    onChange?: () => void;
    value? : string;
}

const Toggle = ({label, value, onChange}: Props) => {
  return (
    <label className="toggle">
      <input onChange={onChange} type="checkbox" value={value} className="sr-only peer" />
      <div className="h-6 bg-gray-200 rounded-full toggle__switch w-11 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 peer-checked:bg-primary-600"></div>
      <span className="toggle__label">{label}</span>
    </label>
  );
};

export default Toggle;
