import React from "react";

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                </label>
            )}
            <input
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-900 border border-blue-200 rounded-xl bg-white 
                           file:px-4 file:py-2 file:mr-4 file:border-0 file:bg-blue-600 file:text-white 
                           file:rounded-md hover:file:bg-blue-500 shadow-sm
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 
                           transition duration-200"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4//8/AwAI/AL+hw8bUQAAAABJRU5ErkJggg==')",
                    backgroundColor: "#f9fbff",
                }}
            />
        </div>
    );
};

export default FileInput;
