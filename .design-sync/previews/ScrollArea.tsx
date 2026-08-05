import { ScrollArea } from 'app';

// Clipped list with the concrete-gray thumb.
export const DivisionList = () => (
  <div className="bg-white p-8">
    <ScrollArea className="h-32 max-w-md border border-gray-200 p-4">
      <ul className="text-sm text-gray-500">
        {["Seed", "Feed", "Commodities", "Retail", "Garden Center", "Custom Milling", "Delivery", "Agronomy"].map((d) => (
          <li key={d} className="border-b border-gray-200 py-2 last:border-0">{d}</li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);
