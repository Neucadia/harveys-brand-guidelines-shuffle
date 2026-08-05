import { Progress } from 'app';

// Sand track, forest fill.
export const QuizProgress = () => (
  <div className="max-w-md bg-white p-8">
    <Progress value={62} />
    <p className="mt-3 font-heading text-xs font-bold uppercase tracking-widest text-green-500">Step 5 of 8</p>
  </div>
);
