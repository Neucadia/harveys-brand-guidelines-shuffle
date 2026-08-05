import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button } from 'app';

// Forced-open ink-black tooltip.
export const InkTip = () => (
  <div className="flex h-40 items-center justify-center bg-white p-8">
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button variant="ghost">Overwinters?</Button>
        </TooltipTrigger>
        <TooltipContent><p>Survives to zone 4 with snow cover</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);
