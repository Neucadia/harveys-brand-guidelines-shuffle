import { Toggle } from 'app';

// Pressed = cream fill + inset green ring.
export const PressedChip = () => (
  <div className="flex items-center gap-4 bg-white p-8">
    <Toggle defaultPressed aria-label="Bulk view">Bulk view</Toggle>
    <Toggle aria-label="List view">List view</Toggle>
    <Toggle variant="outline" aria-label="Outline">Outline</Toggle>
  </div>
);
