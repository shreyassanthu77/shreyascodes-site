import React from "react";
import { Link } from "remix";

export type ButtonVariant = "filled" | "outlined" | "text";

export interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  as?: "link" | "button";
  to?: string;
}

const Button: React.FC<ButtonProps & any> = ({
  variant = "filled",
  className,
  as = "button",
  to = "#",
  children,
  ...rest
}) => {
  const Comp = as === "link" ? Link : "button";

  if (variant === "filled") {
    return (
      <Comp
        to={to}
        className={`${className} text-lg font-semibold px-4 py-2 bg-gray-100 text-primary-dark rounded-full border-2 border-gray-100 hover:bg-gray-300 hover:border-gray-300 outline-none focus:bg-gray-300 focus:border-gray-300 focus:ring-4 transition-colors duration-100`}
        {...rest}
      >
        {children}
      </Comp>
    );
  } else if (variant === "outlined") {
    return (
      <Comp
        to={to}
        className={`${className} text-lg font-semibold px-4 py-2 text-gray-100 bg-primary-dark rounded-full border-2 border-gray-100 hover:bg-primary-light outline-none focus:bg-primary-light focus:ring-4 transition-colors duration-150`}
        {...rest}
      >
        {children}
      </Comp>
    );
  } else {
    return (
      <Comp to={to} className={`${className}`} {...rest}>
        {children}
      </Comp>
    );
  }
};

export default Button;
