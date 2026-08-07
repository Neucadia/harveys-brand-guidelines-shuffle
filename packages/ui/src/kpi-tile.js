import React from "react";
import { cn } from "./utils";

// KPI/stat tile: small label, display-face numeral, optional sub line.
// `negative` paints the numeral Data Red per DR-1 — negative NUMERIC
// semantics only. Deliberately inline (no utility class exists for Data Red)
// and deliberately not a freeform color prop.
const DATA_RED = "#C02617";

const KpiTile = React.forwardRef(
  ({ label, value, sub, negative = false, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border border-hb-neutral-gray bg-white px-4 py-3", className)}
      {...props}
    >
      <div className="font-heading text-xs font-bold uppercase tracking-smallcaps text-hb-text-secondary">
        {label}
      </div>
      <div
        className="mt-1 font-heading text-2xl font-bold tabular-nums text-hb-ink"
        style={negative ? { color: DATA_RED } : undefined}
      >
        {value}
      </div>
      {sub ? <div className="mt-1 text-xs text-hb-text-secondary">{sub}</div> : null}
    </div>
  )
);
KpiTile.displayName = "KpiTile";

export { KpiTile };
