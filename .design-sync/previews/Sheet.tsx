import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, Button } from 'app';

// Statically open right-side panel.
export const CartSheet = () => (
  <div className="relative h-96 bg-yellow-50 p-8">
    <Sheet open>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
          <SheetDescription>2 items — Forage Oats 50lb, Layer Feed 40lb.</SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <Button variant="secondary" className="w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);
