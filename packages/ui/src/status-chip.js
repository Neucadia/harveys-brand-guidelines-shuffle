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
        success: "bg-hb-success-tint text-hb-primary-interactive border-hb-success-tint-border",
        warning: "bg-hb-warning-tint text-hb-ember-text border-hb-warning-tint-border",
        info: "bg-hb-info-tint text-hb-info-strong border-hb-info-tint-border",
        neutral: "bg-hb-wheat-pale text-hb-ink border-hb-border",
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
