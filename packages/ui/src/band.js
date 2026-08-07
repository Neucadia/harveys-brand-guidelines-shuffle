import React from "react";
import { cn } from "./utils";

// Full-width 80px section band. Depth comes from alternating white and pale
// wheat, never from shadows. SectionHeader self-centers; Band does not force
// centering on other children.
const Band = React.forwardRef(
  ({ tone = "white", className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "w-full py-20",
        tone === "wheat" ? "bg-hb-wheat-pale" : "bg-white",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
);
Band.displayName = "Band";

export { Band };
