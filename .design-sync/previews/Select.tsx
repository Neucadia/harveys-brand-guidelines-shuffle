import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, Label } from 'app';

// Closed trigger with a value; the panel opens on interaction.
export const DivisionSelect = () => (
  <div className="max-w-sm bg-white p-8">
    <Label className="mb-2">Division</Label>
    <Select defaultValue="feed">
      <SelectTrigger><SelectValue /></SelectTrigger>
      <SelectContent>
        <SelectItem value="seed">Seed</SelectItem>
        <SelectItem value="feed">Feed</SelectItem>
        <SelectItem value="retail">Retail</SelectItem>
      </SelectContent>
    </Select>
  </div>
);
