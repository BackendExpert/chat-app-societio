import React from "react";

const DefaultButton = ({
    label = "Click the Button",
    onClick,
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`mt-6 w-full py-3 px-6 rounded-full text-lg font-semibold text-white shadow-md 
                        transition duration-300 ease-out transform
                        ${disabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                }`}
        >
            {label}
        </button>
    );
};

export default DefaultButton;
