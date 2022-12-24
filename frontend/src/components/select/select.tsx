import React from "react";
import { uuid } from "../../libs";
import { SelectOption } from "../../types";

export type SelectProps = {
  label: string;
  options: SelectOption[];
  value: string;
};

const Select = ({ label, options, value }: SelectProps) => {
  return (
    <div>
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <select
          value={value}
          id="country"
          name="country"
          autoComplete="country-name"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {options.map((option) => (
            <option key={uuid()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
