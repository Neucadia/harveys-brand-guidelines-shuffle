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
          "flex flex-col items-center justify-center gap-4 border border-hb-neutral-gray bg-hb-surface-panel p-12 text-center",
          className
        )}
        {...props}
      >
        {icon ? (
          <div className={isError ? "text-hb-secondary" : "text-hb-text-secondary"}>
            {icon}
          </div>
        ) : null}
        <div
          className={cn(
            "font-heading text-xl font-bold uppercase tracking-widest",
            isError ? "text-hb-secondary" : "text-hb-ink"
          )}
        >
          {title}
        </div>
        {description ? (
          <p className="max-w-md text-hb-text-secondary">{description}</p>
        ) : null}
        {action ? <div>{action}</div> : null}
      </div>
    );
  }
);
EmptyState.displayName = "EmptyState";

export { EmptyState };
