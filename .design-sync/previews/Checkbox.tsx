import { Checkbox, Label } from 'app';

// Forest-filled checked state with white check.
export const CheckRow = () => (
  <div className="flex flex-col gap-4 bg-white p-8">
    <div className="flex items-center gap-3">
      <Checkbox id="pv-check" defaultChecked />
      <Label htmlFor="pv-check" className="font-normal">Email me when it's back in stock</Label>
    </div>
    <div className="flex items-center gap-3">
      <Checkbox id="pv-check2" />
      <Label htmlFor="pv-check2" className="font-normal">Unchecked</Label>
    </div>
  </div>
);
