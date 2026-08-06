import React from "react";
import { cn } from "./utils";

// The signature section opener: eyebrow chip over a centered uppercase
// headline. `emphasis` swaps the wheat chip for ember — rationed, at most
// one per screen.
const SectionHeader = React.forwardRef(
  (
    { eyebrow, title, lede, emphasis = false, level = "h2", className, ...props },
    ref
  ) => {
    const Heading = level === "h1" ? "h1" : "h2";
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center text-center", className)}
        {...props}
      >
        <span
          className={cn(
            "inline-block px-2 py-1 font-heading text-xs font-bold uppercase tracking-smallcaps",
            emphasis ? "bg-orange-500 text-white" : "bg-yellow-100 text-black"
          )}
        >
          {eyebrow}
        </span>
        <Heading
          className={cn(
            "mt-5 max-w-3xl font-heading font-bold uppercase tracking-widest",
            level === "h1"
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-2xl sm:text-3xl lg:text-4xl"
          )}
        >
          {title}
        </Heading>
        {lede ? <p className="mt-5 max-w-xl text-gray-500">{lede}</p> : null}
      </div>
    );
  }
);
SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
