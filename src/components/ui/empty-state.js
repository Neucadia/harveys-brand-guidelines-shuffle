import React from "react";
import { cn } from "./utils";

// Empty and error surface. Error tone is EMBER, never Data Red — a failed
// state is UI chrome, not a negative number (DR-1). Pair the error tone with
// a retry action whenever one exists.
const EmptyState = React.forwardRef(
  (
    { icon, title, description, action, tone = "neutral", className, ...props },
    ref
  ) => {
    const isError = tone === "error";
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-4 border border-gray-200 bg-gray-50 p-12 text-center",
          className
        )}
        {...props}
      >
        {icon ? (
          <div className={isError ? "text-orange-700" : "text-gray-500"}>
            {icon}
          </div>
        ) : null}
        <div
          className={cn(
            "font-heading text-xl font-bold uppercase tracking-widest",
            isError ? "text-orange-700" : "text-black"
          )}
        >
          {title}
        </div>
        {description ? (
          <p className="max-w-md text-gray-500">{description}</p>
        ) : null}
        {action ? <div>{action}</div> : null}
      </div>
    );
  }
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
