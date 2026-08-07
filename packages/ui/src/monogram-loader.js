import React from "react";
import { cn } from "./utils";

// The brand loader: the Harvey's "H" monogram breathing inside a spinning
// ring. Self-contained — keyframes live in the Tailwind config
// (monogram-spin / monogram-breathe), not in a global stylesheet.
// rounded-full is sanctioned here: the ring is a genuinely circular
// primitive.
const sizeClasses = {
  button: "h-4 w-4",
  sm: "h-7 w-7",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

function HarveysMonogram({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("relative block h-[68%] w-auto fill-current", className)}
      focusable="false"
      viewBox="0 0 170.8 208.29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M117.39,137.46l-.15-78.77,2.97-6.08v-1.42s-15.84.04-15.84.04l.11,41.48c-3.16-.99-6.25-2.22-9.46-3.07-10.72-2.83-22.04-2.61-32.65.58-2.59.78-5.09,1.8-7.67,2.61l-.11-41.38-.1-.1-15.66.04v1.83c.98,2.07,2.1,4.08,2.93,6.21l.2,78.27c-.82,2.24-1.94,4.38-2.89,6.57v1.28s15.66-.04,15.66-.04l.1-.1-.11-44.21c2.46-.79,4.88-1.68,7.38-2.35,13.97-3.75,28.96-2.96,42.4,2.32l.11,44.21,15.83-.04v-1.35c-1.03-2.18-2.19-4.32-3.07-6.56ZM146.46,27.01C131.45,9.02,110.81-.07,85.13,0c-25.68.07-46.27,9.26-61.19,27.32C8.42,46.11-.08,73.47,0,104.37c.08,30.89,8.72,58.21,24.34,76.92,15.02,17.99,35.65,27.07,61.33,27.01,25.68-.07,46.27-9.26,61.19-27.32,15.52-18.79,24.02-46.15,23.94-77.04-.08-30.89-8.72-58.21-24.34-76.92ZM112.2,160.94l-11.57-11.57-.1-35.37c-9.43-1.35-19.26-1.9-28.33.98-.38.12-1.5.43-1.77.59-.05.03-.09.04-.11.1l.04,45.38-23.78.06c-.14-.32-.45-.6-.7-.85-3.34-3.22-6.65-6.52-9.89-9.84-.13-.14-.98-.84-.99-.93v-6s2.91-6.42,2.91-6.42l-.16-76.64c-.85-2.17-1.98-4.24-2.99-6.35l-.02-6.67,23.85-.06c2.91,3.07,6.03,6.03,9.03,9.04.69.69,1.49,1.63,2.2,2.29.04.04.35.17.35.19l.07,25.51c10.1-1.61,20.56-.53,30.22,2.69l-.1-39.82,23.85-.06c3.58,3.67,7.27,7.3,10.91,10.94.19.19.42.46.66.58l.02,6.36-2.97,6.04.14,77.04,3.06,6.45.02,6.29-23.85.06Z" />
    </svg>
  );
}

const MonogramLoaderMark = React.forwardRef(
  ({ className, size = "md", ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 rounded-full border-2 border-current opacity-20" />
      <span className="absolute inset-0 rounded-full border-2 border-transparent border-r-current border-t-current animate-monogram-spin motion-reduce:animate-none" />
      <HarveysMonogram className="animate-monogram-breathe motion-reduce:animate-none" />
    </span>
  )
);
MonogramLoaderMark.displayName = "MonogramLoaderMark";

const MonogramLoader = React.forwardRef(
  (
    { className, label = "Loading", showLabel = false, inline = false, size = "md", ...props },
    ref
  ) => (
    <div
      ref={ref}
      role="status"
      aria-busy="true"
      className={cn(
        "text-hb-primary-interactive",
        inline
          ? "inline-flex items-center gap-2"
          : "flex flex-col items-center justify-center gap-3",
        className
      )}
      {...props}
    >
      <MonogramLoaderMark size={size} />
      <span className="sr-only">{label}</span>
      {showLabel ? (
        <span className="font-heading text-xs font-bold uppercase tracking-smallcaps text-current">
          {label}
        </span>
      ) : null}
    </div>
  )
);
MonogramLoader.displayName = "MonogramLoader";

export { MonogramLoader, MonogramLoaderMark };
