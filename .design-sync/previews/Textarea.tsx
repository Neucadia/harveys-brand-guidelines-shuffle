import { Textarea, Label } from 'app';

// Square textarea matching the input recipe.
export const MultilineField = () => (
  <div className="max-w-sm bg-white p-8">
    <Label htmlFor="pv-notes" className="mb-2">Delivery notes</Label>
    <Textarea id="pv-notes" rows={3} placeholder="Gate code, drop location…" />
  </div>
);
