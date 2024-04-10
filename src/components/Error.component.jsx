import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";

const ErrorComponent = ({ children }) => {
  return (
    <div className="flex border justify-center items-center shadow space-x-2 text-red-400 py-3 my-3">
      <BsExclamationTriangle />
      <h1 className="">{children}!</h1>
    </div>
  );
};

export default ErrorComponent;
