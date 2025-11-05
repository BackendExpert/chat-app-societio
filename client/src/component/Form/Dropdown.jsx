import React from "react";

const Dropdown = ({ label, name, onChange, required = false, options = [] }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <select
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-xl border border-blue-200 text-gray-900 shadow-sm 
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4//8/AwAI/AL+hw8bUQAAAABJRU5ErkJggg==')",
                    backgroundColor: "#f9fbff",
                }}
            >
                <option value="" className="text-gray-500">Select an option</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
