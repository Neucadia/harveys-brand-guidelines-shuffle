import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function CatalogueForms() {
  return (
    <React.Fragment>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
              Component Catalogue
            </div>
          </div>
          <h2 className="font-heading text-center text-3xl lg:text-4xl font-bold max-w-2xl mx-auto mb-4 uppercase tracking-widest">
            Form controls
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Square fields, hairline borders, generous padding. Focus is a 2px
            green ring; validation messages are ember, never red.
          </p>
          <div id="c-input" className="bg-gray-50 p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Input &amp; Label
            </div>
            <div className="max-w-md">
              <Label htmlFor="catalogue-email" className="mb-2">
                Email
              </Label>
              <Input
                id="catalogue-email"
                type="email"
                placeholder="you@harveysmill.com"
                className="mb-6"
              />
              <Label htmlFor="catalogue-disabled" className="mb-2">
                Disabled
              </Label>
              <Input id="catalogue-disabled" disabled placeholder="Disabled" />
            </div>
          </div>
          <div id="c-textarea" className="bg-gray-50 p-12">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Textarea
            </div>
            <div className="max-w-md">
              <Label htmlFor="catalogue-notes" className="mb-2">
                Delivery notes
              </Label>
              <Textarea
                id="catalogue-notes"
                rows={3}
                placeholder="Gate code, drop location…"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
