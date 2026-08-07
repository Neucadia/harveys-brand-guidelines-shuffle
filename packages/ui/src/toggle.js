import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 text-sm font-semibold transition duration-200 hover:bg-hb-wheat-pale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hb-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-hb-wheat-pale data-[state=on]:text-hb-primary-interactive data-[state=on]:ring-1 data-[state=on]:ring-inset data-[state=on]:ring-hb-primary-interactive",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-hb-neutral-gray bg-white",
      },
      size: {
        default: "h-11 px-4",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
