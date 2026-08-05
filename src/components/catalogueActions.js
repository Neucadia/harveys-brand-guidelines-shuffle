import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function CatalogueActions() {
  return (
    <React.Fragment>
      <section id="components" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
              Component Catalogue
            </div>
          </div>
          <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
            Branded components
          </h1>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            A shared, Harvey's-branded set of shadcn components for every
            internal and external project. Flat and square, hairline borders,
            no shadows — green for actions, wheat for commerce, ember in small
            doses.
          </p>
          <div id="c-button" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Button
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Green is the system action. Wheat is the commerce action. Ember is
              destructive — and rationed. Outline pads down 2px so mixed rows
              sit flush.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Button>Save changes</Button>
              <Button variant="secondary">Add to cart</Button>
              <Button variant="outline">Learn more</Button>
              <Button variant="destructive">Delete plot</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Simple link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
          <div id="c-badge" className="bg-white p-12">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Badge
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Seed-tag chips: uppercase Chakra Petch, square corners. Wheat for
              neutral labels, green for confirmation, ember for warnings.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Completed</Badge>
              <Badge variant="secondary">Seasonal</Badge>
              <Badge variant="destructive">Winterkill</Badge>
              <Badge variant="outline">Overwinters</Badge>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
