import React from "react";
import { cn } from "./utils";
import { Button } from "./button";
import { MonogramMark } from "./monogram-loader";

// The shared 404 page: wheat monogram watermark, wheat code chip, display
// headline, and a green way home. A missing page is wayfinding, not a
// failure — no ember, no Data Red. Products keep the shape and swap the
// copy; pass `actions` for framework links (e.g. a Button asChild wrapping
// next/link) and set homeHref={null} to drop the default anchor. `code`
// takes other statuses ("410", "500") when a product needs them.
const NotFound = React.forwardRef(
  (
    {
      code = "404",
      title = "Nothing planted here",
      description = "The page you're looking for moved or never existed.",
      homeHref = "/",
      homeLabel = "Back to home",
      actions,
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[60vh] flex-col items-center justify-center gap-5 px-4 py-20 text-center",
        className
      )}
      {...props}
    >
      <MonogramMark className="h-16 w-auto text-hb-wheat" />
      <span className="inline-block bg-hb-wheat px-2 py-1 font-heading text-xs font-bold uppercase tracking-smallcaps text-hb-ink">
        {code}
      </span>
      <h1 className="max-w-3xl font-heading text-3xl font-bold uppercase tracking-widest text-hb-ink sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-xl text-hb-text-secondary">{description}</p>
      ) : null}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
        {homeHref ? (
          <Button asChild>
            <a href={homeHref}>{homeLabel}</a>
          </Button>
        ) : null}
        {actions}
      </div>
    </div>
  )
);
NotFound.displayName = "NotFound";

export { NotFound };
