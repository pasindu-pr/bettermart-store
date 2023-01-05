import React from "react";
import { ErrorProps } from "../../types/components/props";

const Error = ({ message }: ErrorProps) => {
  return (
    <p className="text-red-600 font-semibold text-left text-sm !mt-0">
      &#x2022; {message}
    </p>
  );
};

export default Error;
