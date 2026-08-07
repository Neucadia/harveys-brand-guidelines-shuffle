import React from "react";
import { cn } from "./utils";

// Stepper for multi-step flows: "Step n of N" line over a flat segment bar.
// Filled segments are Field Green; unfilled are warm wheat. Flat and square.
const WizardProgress = React.forwardRef(
  ({ steps, currentStep, title, className, ...props }, ref) => {
    const clamped = Math.max(0, Math.min(currentStep, steps - 1));
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="mb-2 text-sm text-hb-text-secondary">
          Step {clamped + 1} of {steps}
          {title ? `: ${title}` : ""}
        </div>
        <div
          className="flex w-full gap-1"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps}
          aria-valuenow={clamped + 1}
          aria-label={title ? `Step ${clamped + 1} of ${steps}: ${title}` : `Step ${clamped + 1} of ${steps}`}
        >
          {Array.from({ length: steps }, (_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 flex-1",
                i <= clamped ? "bg-hb-primary-interactive" : "bg-hb-wheat-light"
              )}
            />
          ))}
        </div>
      </div>
    );
  }
);
WizardProgress.displayName = "WizardProgress";

export { WizardProgress };
