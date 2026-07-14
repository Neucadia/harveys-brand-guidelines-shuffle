import { NegativePrimaryOnWheat } from 'app';

// The wheat negative primary is designed for green backgrounds (the card
// itself ships without one), so the preview composes it on brand green.
export const OnGreenBackground = () => (
  <div className="bg-green-500 p-8">
    <NegativePrimaryOnWheat />
  </div>
);
