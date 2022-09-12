import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        "focus:ring-4",
        "rounded",
        "px-6",
        "text-white",
        "shadow",
        "outline-none",
        "ease-linear",
        "transition-all",
        "duration-150",
        "bg-blue-600",
        "hover:shadow-md",
        "dark:bg-blue-700",
        "hover:bg-blue-800",
        "dark:hover:bg-blue-900",
        "focus:ring-blue-300",
        "dark:focus:ring-blue-800",
        "disabled:bg-gray-400",
        "disabled:hover:bg-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
