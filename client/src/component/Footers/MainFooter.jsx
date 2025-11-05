import React from "react";
import Logo from "../../assets/Logo.png";

const MainFooter = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 shadow-inner">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="h-8 w-auto" />
                    <span className="font-semibold tracking-wide">
                        © {new Date().getFullYear()} Zavory
                    </span>
                </div>

                <p className="mt-2 md:mt-0">
                    Maintained & Engineered by{" "}
                    <a
                        href="https://blackalphalabs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline"
                    >
                        BlackAlphaLabs
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default MainFooter;
