import React from "react";

type InputComponentProps = {
  autoComplete?: string;
  id?: string;
  label: string;
  name: string;
  value?: string | undefined;
  error?: string | undefined;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (
  { label, error, ...props }: InputComponentProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <div>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          ref={ref}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...props}
        />
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
