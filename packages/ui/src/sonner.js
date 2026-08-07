import React from "react";
import { Toaster as Sonner } from "sonner";

// Brand-flat sonner: light only, square corners, hairline border, no shadow.
const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        unstyled: false,
        // Inline style beats sonner's runtime-injected stylesheet.
        style: { borderRadius: 0, boxShadow: "none" },
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-hb-ink group-[.toaster]:border group-[.toaster]:border-hb-neutral-gray group-[.toaster]:shadow-none group-[.toaster]:rounded-none",
          title: "group-[.toast]:font-semibold",
          description: "group-[.toast]:text-hb-text-secondary",
          actionButton:
            "group-[.toast]:bg-hb-primary-interactive group-[.toast]:text-white group-[.toast]:font-semibold group-[.toast]:rounded-none",
          cancelButton:
            "group-[.toast]:bg-hb-wheat-pale group-[.toast]:text-hb-text-secondary group-[.toast]:font-semibold group-[.toast]:rounded-none",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
