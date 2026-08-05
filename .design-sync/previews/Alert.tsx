import { Alert, AlertTitle, AlertDescription } from 'app';

// Cream default and ember destructive — never red.
export const Callouts = () => (
  <div className="max-w-xl space-y-6 bg-white p-8">
    <Alert>
      <AlertTitle>Pickup ready</AlertTitle>
      <AlertDescription>Your custom feed order is bagged and waiting at the mill counter.</AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <AlertTitle>Not plantable in your zone</AlertTitle>
      <AlertDescription>This variety won't overwinter north of zone 6.</AlertDescription>
    </Alert>
  </div>
);
