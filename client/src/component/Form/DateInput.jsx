import React from "react";

const DateInput = ({ label, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <input
                type="date"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-blue-200 text-gray-900 shadow-sm 
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4//8/AwAI/AL+hw8bUQAAAABJRU5ErkJggg==')",
                    backgroundColor: "#f9fbff",
                }}
            />
        </div>
    );
};

export default DateInput;
