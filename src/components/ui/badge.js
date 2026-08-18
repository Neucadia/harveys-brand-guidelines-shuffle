import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 font-heading text-xs font-bold uppercase tracking-smallcaps transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hb-focus-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-hb-primary-interactive text-white",
        secondary: "bg-hb-wheat text-hb-ink",
        destructive: "bg-hb-secondary text-white",
        outline: "border border-hb-primary-interactive text-hb-primary-interactive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
