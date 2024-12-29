import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    containerClassName?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, containerClassName, ...props }) => {
    return (
        <div className={`flex flex-col space-y-2 ${containerClassName}`}>
            {label && <label>{label}</label>}
            <input {...props} />
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

export default Input;
