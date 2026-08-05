import { Button } from 'app';

// All button intents and sizes — green system, wheat commerce, ember destructive, compensated outline.
export const Intents = () => (
  <div className="flex flex-col gap-6 bg-white p-8">
    <div className="flex flex-wrap items-center gap-4">
      <Button>Save changes</Button>
      <Button variant="secondary">Add to cart</Button>
      <Button variant="outline">Learn more</Button>
      <Button variant="destructive">Delete plot</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Simple link</Button>
    </div>
    <div className="flex flex-wrap items-center gap-4">
      <Button size="lg">Large</Button>
      <Button>Default</Button>
      <Button size="sm">Small</Button>
      <Button disabled>Disabled</Button>
    </div>
  </div>
);
