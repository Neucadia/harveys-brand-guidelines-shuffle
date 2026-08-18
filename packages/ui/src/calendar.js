import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label:
          "font-heading text-sm font-bold uppercase tracking-widest",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 p-0 opacity-70 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "w-9 font-heading text-xs font-bold uppercase tracking-smallcaps text-hb-text-secondary",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day: cn(
          "h-9 w-9 p-0 font-normal transition duration-200 hover:bg-hb-wheat-pale hover:text-hb-primary-interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hb-focus-ring focus-visible:ring-offset-2 aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-hb-primary-interactive text-white hover:bg-hb-primary-hover hover:text-white focus:bg-hb-primary-interactive focus:text-white",
        day_today: "bg-hb-wheat text-hb-ink",
        day_outside: "day-outside text-hb-neutral-gray aria-selected:bg-hb-wheat-pale aria-selected:text-hb-neutral-gray",
        day_disabled: "text-hb-neutral-gray opacity-50",
        day_range_middle: "aria-selected:bg-hb-wheat-pale aria-selected:text-hb-ink",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...iconProps }) => (
          <ChevronLeft className="h-4 w-4" {...iconProps} />
        ),
        IconRight: ({ ...iconProps }) => (
          <ChevronRight className="h-4 w-4" {...iconProps} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
