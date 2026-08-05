import { Popover, PopoverTrigger, PopoverContent, Button } from 'app';

// Open popover panel below its trigger.
export const InfoPopover = () => (
  <div className="flex h-64 items-start justify-center bg-white p-8">
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">Planting window</Button>
      </PopoverTrigger>
      <PopoverContent>
        <h4 className="mb-2 font-heading text-sm font-bold uppercase tracking-widest">Zone 5b</h4>
        <p className="text-sm text-gray-500">Sow oats Aug 1 – Sep 15 for reliable fall establishment.</p>
      </PopoverContent>
    </Popover>
  </div>
);
