import { Switch, Label } from 'app';

// Sand track flips to forest when on.
export const SwitchRow = () => (
  <div className="flex flex-col gap-4 bg-white p-8">
    <div className="flex items-center gap-3">
      <Switch id="pv-sw" defaultChecked />
      <Label htmlFor="pv-sw" className="font-normal">Bulk pricing</Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="pv-sw2" />
      <Label htmlFor="pv-sw2" className="font-normal">Off</Label>
    </div>
  </div>
);
