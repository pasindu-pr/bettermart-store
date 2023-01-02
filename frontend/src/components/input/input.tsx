import React from "react";
import { InputComponentProps } from "../../types";

const Input = (
  { label, error, id, additionalStyles, ...props }: InputComponentProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div>
        <input
          id={id}
          ref={ref}
          className={`block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${additionalStyles}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
