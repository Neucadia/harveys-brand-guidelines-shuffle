import React from "react";
import { cn } from "./utils";

function Skeleton({ className, ...props }) {
  return (
    <div className={cn("animate-pulse bg-gray-400", className)} {...props} />
  );
}

export { Skeleton };
