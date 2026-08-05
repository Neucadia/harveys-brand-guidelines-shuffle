import { Badge } from 'app';

// Badge variants — green confirmation, wheat neutral, ember warning, outline.
export const SeedTagChips = () => (
  <div className="flex flex-wrap items-center gap-4 bg-white p-8">
    <Badge>Completed</Badge>
    <Badge variant="secondary">Seasonal</Badge>
    <Badge variant="destructive">Winterkill</Badge>
    <Badge variant="outline">Overwinters</Badge>
  </div>
);
