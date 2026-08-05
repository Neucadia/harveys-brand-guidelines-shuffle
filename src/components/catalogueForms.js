import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
          <div id="c-textarea" className="bg-gray-50 p-12 mb-8">
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
          <div className="flex flex-wrap -m-4 mb-8">
            <div id="c-checkbox" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Checkbox &amp; Switch
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Checkbox id="catalogue-terms" defaultChecked />
                  <Label htmlFor="catalogue-terms" className="font-normal">
                    Email me when it's back in stock
                  </Label>
                </div>
                <div id="c-switch" className="flex items-center gap-3">
                  <Switch id="catalogue-bulk" />
                  <Label htmlFor="catalogue-bulk" className="font-normal">
                    Bulk pricing
                  </Label>
                </div>
              </div>
            </div>
            <div id="c-select" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Select
                </div>
                <div className="max-w-md">
                  <Label className="mb-2">Division</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a division" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="feed">Feed</SelectItem>
                      <SelectItem value="commodities">Commodities</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="garden">Garden Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div id="c-slider" className="bg-gray-50 p-12">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Slider
            </div>
            <div className="max-w-md">
              <Label className="mb-4">Acreage</Label>
              <Slider defaultValue={[40]} max={200} step={5} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
