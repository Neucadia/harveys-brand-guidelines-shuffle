import React from "react";
import { cn } from "./utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-20 w-full border border-hb-neutral-gray bg-white px-6 py-3 text-sm placeholder-hb-text-secondary transition duration-200 outline-none focus-visible:ring-2 focus-visible:ring-hb-focus-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
