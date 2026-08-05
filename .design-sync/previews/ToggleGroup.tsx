import { ToggleGroup, ToggleGroupItem } from 'app';

// Outline toggle set with shared sizing.
export const GroupedToggles = () => (
  <div className="bg-white p-8">
    <ToggleGroup type="multiple" variant="outline" defaultValue={["b"]}>
      <ToggleGroupItem value="b" aria-label="Bold"><span className="font-bold">B</span></ToggleGroupItem>
      <ToggleGroupItem value="i" aria-label="Italic"><span className="italic">I</span></ToggleGroupItem>
      <ToggleGroupItem value="u" aria-label="Underline"><span className="underline">U</span></ToggleGroupItem>
    </ToggleGroup>
  </div>
);
