import { Separator } from 'app';

// Horizontal and vertical hairline rules.
export const Rules = () => (
  <div className="max-w-sm bg-white p-8">
    <p className="text-sm mb-4">Feed &amp; supplement lines</p>
    <Separator className="mb-4" />
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Cattle</span>
      <Separator orientation="vertical" />
      <span>Poultry</span>
      <Separator orientation="vertical" />
      <span>Goat</span>
    </div>
  </div>
);
