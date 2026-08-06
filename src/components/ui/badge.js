import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-green-500 text-white",
        secondary: "bg-yellow-100 text-black",
        destructive: "bg-orange-700 text-white",
        outline: "border border-green-500 text-green-500",
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
