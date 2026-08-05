import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'app';

// Uppercase triggers with green chevrons; first item open.
export const Disclosure = () => (
  <div className="max-w-md bg-white p-8">
    <Accordion type="single" collapsible defaultValue="delivery">
      <AccordionItem value="delivery">
        <AccordionTrigger>Do you deliver?</AccordionTrigger>
        <AccordionContent>Yes — bulk feed and seed deliveries run weekly across mid-Michigan.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="custom">
        <AccordionTrigger>Custom feed blends?</AccordionTrigger>
        <AccordionContent>Bring us your ration sheet and we'll mix it at the mill.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
