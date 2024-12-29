import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, className, ...props }) => {
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && <label className="text-sm font-medium text-white">{label}</label>}
            <input
                {...props}
                className={`w-[522px] h-[70px] px-4 py-2 text-lg text-white bg-[#6C6565] rounded-lg border ${
                    errorMessage ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-[#8DBF7D]`}
            />
            {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
        </div>
    );
};

export default Input;
