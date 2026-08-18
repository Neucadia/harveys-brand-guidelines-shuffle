import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "./utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-hb-sand">
      <SliderPrimitive.Range className="absolute h-full bg-hb-primary-interactive" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 border-2 border-hb-primary-interactive bg-white transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hb-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
