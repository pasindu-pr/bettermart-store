import React from "react";
import { H2Props } from "../../types/components/props";

const H2 = ({ text }: H2Props) => {
  return (
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      {text}
    </h2>
  );
};

export default H2;
