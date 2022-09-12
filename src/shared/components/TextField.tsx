import React from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const TextField = ({ className, ...props }: Props) => {
  return (
    <div>
      <input
        type="text"
        className={clsx(
          "bg-gray-50 border",
          "border-gray-300",
          "text-gray-900",
          "text-sm",
          "rounded-lg",
          "focus:ring-blue-500",
          "focus:border-blue-500",
          "outline-none",
          "block",
          "w-full",
          "p-2.5",
          "dark:bg-gray-700",
          "dark:border-gray-600",
          "dark:placeholder-gray-400",
          "dark:text-white",
          "dark:focus:ring-blue-500",
          "dark:focus:border-blue-500",
          "dark:outline-none",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default TextField;
