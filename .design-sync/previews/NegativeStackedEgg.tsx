import { NegativeStackedEgg } from 'app';

// The negative stacked egg ships with a transparent card and white copy (its
// bg state defaults to ""), designed for the green Logos section — so the
// preview composes it on brand green like the real section does.
export const NegativeStackedEggCard = () => (
  <div className="bg-green-700 p-8">
    <NegativeStackedEgg />
  </div>
);
