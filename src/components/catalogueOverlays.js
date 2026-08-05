import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

export default function CatalogueOverlays() {
  return (
    <React.Fragment>
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
              Component Catalogue
            </div>
          </div>
          <h2 className="font-heading text-center text-3xl lg:text-4xl font-bold max-w-2xl mx-auto mb-4 uppercase tracking-widest">
            Overlays
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Square panels on an 80% ink scrim. No shadow — the hairline border
            does the work.
          </p>
          <div id="c-dialog" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Dialog &amp; Sheet
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Dialog for confirmations; Sheet for side panels like carts and
              filters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">Clear plot</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Clear this plot?</DialogTitle>
                    <DialogDescription>
                      Your drawn boundary and soil breakdown will be removed.
                      This can't be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Keep plot</Button>
                    <Button variant="destructive">Clear &amp; redraw</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary">Open cart</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Your cart</SheetTitle>
                    <SheetDescription>
                      2 items — Forage Oats 50lb, Layer Feed 40lb.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <Button variant="secondary" className="w-full">
                      Checkout
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div id="c-popover" className="w-full lg:w-1/2 p-4">
              <div className="bg-white p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Popover
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Planting window</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-2">
                      Zone 5b
                    </h4>
                    <p className="text-sm text-gray-500">
                      Sow oats Aug 1 – Sep 15 for reliable fall establishment.
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div id="c-tooltip" className="w-full lg:w-1/2 p-4">
              <div className="bg-white p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Tooltip
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost">Overwinters?</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Survives to zone 4 with snow cover</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div id="c-sonner" className="bg-white p-12 mt-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Toast (Sonner)
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Flat white toasts with hairline borders. Mount one Toaster at the
              app root.
            </p>
            <Button
              variant="secondary"
              onClick={() =>
                toast("Added to cart", {
                  description: "Forage Oats 50lb — ready for pickup Friday.",
                  action: { label: "View cart", onClick: () => {} },
                })
              }
            >
              Add to cart
            </Button>
            <Toaster />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
