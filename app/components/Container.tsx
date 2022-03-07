import React from "react";

export interface ContainerProps {
  as?: string;
}

const x = <div></div>;

const Container: React.FC<
  ContainerProps &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, as: Comp = "div", className, ...rest }) => {
  return (
    // @ts-ignore
    <Comp className={`container mx-auto px-4 ${className}`} {...rest}>
      {children}
    </Comp>
  );
};

export default Container;
