import { Input, Label } from 'app';

// Square input with label; disabled state below.
export const TextField = () => (
  <div className="max-w-sm space-y-6 bg-white p-8">
    <div>
      <Label htmlFor="pv-email" className="mb-2">Email</Label>
      <Input id="pv-email" type="email" placeholder="you@harveysmill.com" />
    </div>
    <Input disabled placeholder="Disabled" />
  </div>
);
