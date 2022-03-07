import React from "react";

export const inputClasses = (className: string) =>
  `outline-none px-4 py-2 bg-primary-dark rounded-t border-b-2 border-gray-300 focus:border-teal-500 transition-colors duration-150 ${className}`;

export const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ className = "", ...rest }) => {
  return <input className={inputClasses(className)} {...rest} />;
};

export const TextArea: React.FC<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
> = ({ className, ...rest }) => {
  return (
    <textarea
      className={inputClasses(`resize-none ${className}`)}
      {...rest}
    ></textarea>
  );
};
