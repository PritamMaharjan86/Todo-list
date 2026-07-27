import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        className="border-2 border-black rounded-md p-1 mt-5 text-sm "
        onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
