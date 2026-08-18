import React from "react";
import { cn } from "./utils";

function Skeleton({ className, ...props }) {
  return (
    <div className={cn("animate-pulse bg-hb-neutral-gray", className)} {...props} />
  );
}

export { Skeleton };
