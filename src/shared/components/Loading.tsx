import clsx from "clsx";

const Loading = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "absolute",
        "top-1/2",
        "left-1/2",
        "transform",
        "-translate-x-1/2",
        "-translate-y-1/2"
      )}
    >
      <div
        className={clsx(
          "spinner-border",
          "animate-spin",
          "inline-block",
          "w-32",
          "h-32",
          "border-4",
          "border-t-blue-500",
          "rounded-full"
        )}
        role="status"
      />
    </div>
  );
};

export default Loading;
