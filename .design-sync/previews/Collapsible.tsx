import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from 'app';

// Open collapsible with an outline trigger.
export const ShowMore = () => (
  <div className="max-w-md bg-white p-8">
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm">Show store hours</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="pt-4 text-sm text-gray-500">Mon–Fri 8–6 · Sat 8–4 · Closed Sundays</p>
      </CollapsibleContent>
    </Collapsible>
  </div>
);
