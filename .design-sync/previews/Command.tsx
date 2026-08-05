import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from 'app';

// Inline command palette with seed-tag group headings.
export const SearchPalette = () => (
  <div className="bg-yellow-50 p-8">
    <Command className="max-w-md border border-gray-200">
      <CommandInput placeholder="Search products and tools…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Tools">
          <CommandItem>Plot Finder</CommandItem>
          <CommandItem>Feed calculator</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Divisions">
          <CommandItem>Seed</CommandItem>
          <CommandItem>Feed</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
);
