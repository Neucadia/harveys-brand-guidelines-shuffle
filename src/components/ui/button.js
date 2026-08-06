import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-green-500 text-white hover:bg-green-600",
        secondary: "bg-yellow-500 text-black hover:bg-sand",
        destructive: "bg-orange-700 text-white hover:bg-orange-950",
        outline:
          "border-2 border-green-500 bg-white text-green-500 hover:bg-yellow-50",
        ghost: "text-green-500 hover:bg-yellow-50",
        link: "text-green-500 hover:underline",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-sm",
        icon: "h-11 w-11",
      },
    },
    // Outline carries a 2px border; padding compensates so all variants of a
    // given size sit at identical total height side by side.
    compoundVariants: [
      { variant: "outline", size: "default", class: "px-[22px] py-[10px]" },
      { variant: "outline", size: "sm", class: "px-[14px] py-[6px]" },
      { variant: "outline", size: "lg", class: "px-[30px] py-[14px]" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
