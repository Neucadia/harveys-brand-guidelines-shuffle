import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, Button } from 'app';

// Statically open bottom tray — the side="right" cart variant clips at capture
// width, so the specimen uses the full-width bottom side to show the chrome.
export const FilterTray = () => (
  <div className="relative h-96 bg-yellow-50 p-8">
    <Sheet open>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Filter products</SheetTitle>
          <SheetDescription>
            Division, planting zone, and availability — square panel, hairline
            edge, no shadow.
          </SheetDescription>
        </SheetHeader>
        <div className="flex gap-4 py-6">
          <Button variant="secondary">Apply filters</Button>
          <Button variant="ghost">Clear</Button>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);
