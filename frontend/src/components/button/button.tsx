import React from "react";
import { ButtonProps } from "../../types";

const Button = ({ title, size, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-full bg-indigo-600 border border-transparent rounded-md shadow-sm px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 ${
        size === "small" ? "py-2" : "py-3"
      }`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
