import React from "react";

const DefultError = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 py-16 min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <h1 className="text-9xl font-extrabold text-blue-600 animate-pulse drop-shadow-lg">
                404
            </h1>

            <h2 className="mt-4 text-3xl font-semibold tracking-wide text-blue-700">
                Oops! Page Not Found
            </h2>

            <p className="mt-2 text-gray-600 max-w-md">
                The page you’re looking for doesn’t exist or may have been moved.
                Don’t worry — you can safely head back home.
            </p>

            <a href="/" className="mt-8">
                <div className="py-3 px-10 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg rounded-full shadow-md 
                                hover:from-blue-700 hover:to-blue-500 hover:shadow-lg hover:scale-105 
                                transition duration-300 ease-out">
                    Go Back Home
                </div>
            </a>
        </div>
    );
};

export default DefultError;
