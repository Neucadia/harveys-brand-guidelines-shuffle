import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

// The tint tier of the two-tier status system (DR-3). Solid poster chips
// (>=18px text) are Badge; tints never become Badge variants.
const statusChipVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap border px-2 py-0.5 font-heading text-xs font-bold uppercase tracking-smallcaps",
  {
    variants: {
      intent: {
        success: "bg-green-50 text-green-500 border-success-tint-border",
        warning: "bg-warning-tint text-orange-950 border-warning-tint-border",
        info: "bg-info-tint text-info-strong border-info-tint-border",
        neutral: "bg-yellow-50 text-black border-hairline",
      },
    },
    defaultVariants: {
      intent: "neutral",
    },
  }
);

const StatusChip = React.forwardRef(
  ({ className, intent, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(statusChipVariants({ intent, className }))}
      {...props}
    />
  )
);
StatusChip.displayName = "StatusChip";

export { StatusChip, statusChipVariants };
