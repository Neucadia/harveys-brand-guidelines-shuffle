import { Skeleton } from 'app';

// Square pulsing placeholders.
export const LoadingBlocks = () => (
  <div className="flex items-center gap-4 bg-white p-8">
    <Skeleton className="h-12 w-12" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-56" />
      <Skeleton className="h-4 w-40" />
    </div>
  </div>
);
