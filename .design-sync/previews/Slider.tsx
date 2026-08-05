import { Slider, Label } from 'app';

// Sand track, forest range, square thumb.
export const AcreageSlider = () => (
  <div className="max-w-md bg-white p-8">
    <Label className="mb-4">Acreage</Label>
    <Slider defaultValue={[40]} max={200} step={5} />
  </div>
);
