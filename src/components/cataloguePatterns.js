import React from "react";
import { RefreshCw, Search } from "lucide-react";
import { Button } from "./ui/button";
import { StatusChip } from "./ui/status-chip";
import { SectionHeader } from "./ui/section-header";
import { Band } from "./ui/band";
import { KpiTile } from "./ui/kpi-tile";
import { MonogramLoader } from "./ui/monogram-loader";
import { WizardProgress } from "./ui/wizard-progress";
import { EmptyState } from "./ui/empty-state";
import { NotFound } from "./ui/not-found";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function CataloguePatterns() {
  return (
    <React.Fragment>
      <section id="patterns" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 py-1 px-2 font-bold inline-block">
              Component Catalogue
            </div>
          </div>
          <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold max-w-2xl lg:max-w-5xl mx-auto mb-4 uppercase tracking-widest">
            Brand patterns
          </h1>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            The components the products invented, promoted into the kit:
            section openers, status tints, KPI tiles, the brand loader,
            steppers, and empty states.
          </p>

          <div id="c-section-header" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              SectionHeader + Band
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Every section opens with an eyebrow chip over a centered
              uppercase headline. Bands alternate white and pale wheat at 80px.
              The ember emphasis chip is rationed — at most one per screen.
            </p>
            <div className="border border-gray-200">
              <Band tone="white" className="py-10">
                <SectionHeader
                  eyebrow="Our seed"
                  title="Built for Michigan ground"
                  lede="Varieties proven on the fields we farm ourselves."
                />
              </Band>
              <Band tone="wheat" className="py-10">
                <SectionHeader
                  emphasis
                  eyebrow="This week only"
                  title="Fall food plot sale"
                  lede="Ember emphasis is rationed: one per screen."
                />
              </Band>
            </div>
          </div>

          <div id="c-status-chip" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              StatusChip
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              The tint tier for table-scale statuses (DR-3). Solid poster
              chips stay Badge, for ≥18px text. Warning covers pending,
              canceled, and past-due — ember, never red.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <StatusChip intent="success">Reconciled</StatusChip>
              <StatusChip intent="warning">Past due</StatusChip>
              <StatusChip intent="info">In transit</StatusChip>
              <StatusChip>Winter wheat</StatusChip>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>#2481</TableCell>
                  <TableCell>Soybean meal</TableCell>
                  <TableCell>
                    <StatusChip intent="success">Delivered</StatusChip>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>#2482</TableCell>
                  <TableCell>Winter rye</TableCell>
                  <TableCell>
                    <StatusChip intent="warning">Pending</StatusChip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div id="c-kpi-tile" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              KpiTile
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Label, display-face numeral, optional sub line. The negative
              variant paints the numeral Data Red — negative numeric semantics
              only, never UI states (DR-1).
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <KpiTile label="Loads this week" value="128" sub="+12 vs last week" />
              <KpiTile label="Avg basis" value="$0.42 / bu" sub="30-day window" />
              <KpiTile
                label="Net margin"
                value="-$1.87 / bu"
                sub="Data Red: negative numerics only"
                negative
              />
            </div>
          </div>

          <div id="c-monogram-loader" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              MonogramLoader
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              The brand loader: the H monogram breathing inside a spinning
              ring. Four sizes; the ring is a sanctioned circle primitive.
            </p>
            <div className="flex flex-wrap items-end gap-10">
              <MonogramLoader size="button" label="Loading (button)" />
              <MonogramLoader size="sm" label="Loading (small)" />
              <MonogramLoader size="md" label="Loading (medium)" />
              <MonogramLoader size="lg" showLabel label="Loading" />
            </div>
          </div>

          <div id="c-wizard-progress" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              WizardProgress
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Multi-step flows get a flat segment bar — filled Field Green,
              unfilled warm wheat.
            </p>
            <div className="max-w-md">
              <WizardProgress steps={4} currentStep={2} title="Nutrients" />
            </div>
          </div>

          <div id="c-empty-state" className="bg-white p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              EmptyState
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Neutral for no-data; error tone is ember — never Data Red — and
              always offers the way forward.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <EmptyState
                icon={<Search className="h-8 w-8" />}
                title="No results"
                description="No products match these filters."
                action={<Button variant="outline">Clear filters</Button>}
              />
              <EmptyState
                tone="error"
                icon={<RefreshCw className="h-8 w-8" />}
                title="Data source offline"
                description="We couldn't reach the price feed. Your last synced numbers are shown elsewhere."
                action={<Button variant="destructive">Retry connection</Button>}
              />
            </div>
          </div>

          <div id="c-not-found" className="bg-white p-12">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              NotFound
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              One 404 for every product: wheat monogram watermark, code chip,
              display headline, and a green way home. A missing page is
              wayfinding, not a failure — no ember, no red. Copy is per
              product; the shape is shared.
            </p>
            <div className="border border-gray-200">
              <NotFound
                className="min-h-0 py-16"
                actions={<Button variant="outline">Browse products</Button>}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
