import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ScrollArea } from "./ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

const divisions = [
  "Seed",
  "Feed",
  "Commodities",
  "Retail",
  "Garden Center",
  "Custom Milling",
  "Delivery",
  "Agronomy",
  "Wildlife & Hunting",
  "Seasonal",
];

export default function CatalogueLayout() {
  return (
    <React.Fragment>
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 py-1 px-2 font-semibold inline-block">
              Component Catalogue
            </div>
          </div>
          <h2 className="font-heading text-center text-3xl lg:text-4xl font-bold max-w-2xl mx-auto mb-4 uppercase tracking-widest">
            Layout &amp; disclosure
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Depth comes from fills and hairlines, never shadows. Disclosure
            motion stays at 200ms.
          </p>
          <div className="flex flex-wrap -m-4 mb-8">
            <div id="c-card" className="w-full lg:w-1/2 p-4">
              <div className="bg-white p-12 h-full">
                <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
                  Card
                </div>
                <Card className="max-w-sm">
                  <CardHeader>
                    <Badge variant="secondary" className="self-start mb-2">
                      Seed
                    </Badge>
                    <CardTitle>Forage Oats</CardTitle>
                    <CardDescription>
                      Quick-establishing cover with strong fall grazing value.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      50lb bag · plant Aug–Sep · zones 4–7
                    </p>
                  </CardContent>
                  <CardFooter className="gap-4">
                    <Button variant="secondary">Add to cart</Button>
                    <Button variant="link">Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <div className="bg-white p-12 h-full">
                <div id="c-separator" className="mb-10">
                  <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
                    Separator
                  </div>
                  <p className="text-sm mb-4">Feed &amp; supplement lines</p>
                  <Separator className="mb-4" />
                  <div className="flex h-5 items-center gap-4 text-sm">
                    <span>Cattle</span>
                    <Separator orientation="vertical" />
                    <span>Poultry</span>
                    <Separator orientation="vertical" />
                    <span>Goat</span>
                  </div>
                </div>
                <div id="c-skeleton">
                  <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
                    Skeleton
                  </div>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-56" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="c-tabs" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
              Tabs
            </div>
            <Tabs defaultValue="retail" className="max-w-md">
              <TabsList>
                <TabsTrigger value="retail">Retail</TabsTrigger>
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="seed">Seed</TabsTrigger>
              </TabsList>
              <TabsContent value="retail" className="text-sm text-gray-500">
                Workwear, boots, and farm supplies from brands we trust.
              </TabsContent>
              <TabsContent value="feed" className="text-sm text-gray-500">
                Custom rations mixed at the mill, bagged or bulk.
              </TabsContent>
              <TabsContent value="seed" className="text-sm text-gray-500">
                Field-proven varieties selected for mid-Michigan.
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex flex-wrap -m-4">
            <div id="c-accordion" className="w-full lg:w-1/2 p-4">
              <div className="bg-white p-12 h-full">
                <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
                  Accordion
                </div>
                <Accordion type="single" collapsible className="max-w-md">
                  <AccordionItem value="delivery">
                    <AccordionTrigger>Do you deliver?</AccordionTrigger>
                    <AccordionContent>
                      Yes — bulk feed and seed deliveries run weekly across
                      mid-Michigan.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="custom">
                    <AccordionTrigger>Custom feed blends?</AccordionTrigger>
                    <AccordionContent>
                      Bring us your ration sheet and we'll mix it at the mill.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="returns">
                    <AccordionTrigger>Return policy</AccordionTrigger>
                    <AccordionContent>
                      Unopened bags within 30 days, receipt in hand — we'll make
                      it right.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <div className="bg-white p-12 h-full">
                <div id="c-collapsible" className="mb-10">
                  <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
                    Collapsible
                  </div>
                  <Collapsible className="max-w-md">
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm">
                        Show store hours
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="pt-4 text-sm text-gray-500">
                        Mon–Fri 8–6 · Sat 8–4 · Closed Sundays
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                <div id="c-scroll-area">
                  <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
                    Scroll Area
                  </div>
                  <ScrollArea className="h-32 max-w-md border border-gray-200 p-4">
                    <ul className="text-sm text-gray-500">
                      {divisions.map((d) => (
                        <li key={d} className="border-b border-gray-200 py-2 last:border-0">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
          <div id="c-resizable" className="bg-white p-12 mt-8">
            <div className="px-2 py-1 mb-4 font-semibold inline-block bg-orange-500 text-white">
              Resizable
            </div>
            <ResizablePanelGroup
              direction="horizontal"
              className="max-w-md border border-gray-200"
            >
              <ResizablePanel defaultSize={60}>
                <div className="flex h-32 items-center justify-center bg-yellow-50 p-6">
                  <span className="font-heading text-xs font-bold uppercase tracking-widest">
                    Map
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={40}>
                <div className="flex h-32 items-center justify-center p-6">
                  <span className="font-heading text-xs font-bold uppercase tracking-widest">
                    Soil facts
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
