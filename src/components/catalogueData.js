import React from "react";
import { TriangleAlert } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { DataTableColumnHeader } from "./ui/data-table-column-header";
import { DataTablePagination } from "./ui/data-table-pagination";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Calendar } from "./ui/calendar";
import { Progress } from "./ui/progress";

const orders = [
  { id: "HV-1042", product: "Forage Oats 50lb", status: "Completed", total: "$38.50" },
  { id: "HV-1043", product: "Layer Feed 40lb", status: "Completed", total: "$21.75" },
  { id: "HV-1044", product: "Clover Mix 25lb", status: "Pending", total: "$64.00" },
];

const seedTrials = [
  { variety: "Forage Oats", plots: 14, yield: 4.2, zone: "4-7" },
  { variety: "Winter Rye", plots: 22, yield: 3.8, zone: "3-7" },
  { variety: "Clover Mix", plots: 9, yield: 2.9, zone: "4-8" },
  { variety: "Alfalfa Prime", plots: 17, yield: 5.1, zone: "4-8" },
  { variety: "Sorghum Sudan", plots: 6, yield: 6.3, zone: "5-9" },
  { variety: "Turnip Blend", plots: 11, yield: 3.4, zone: "3-7" },
  { variety: "Buckwheat", plots: 8, yield: 2.2, zone: "4-8" },
];

const trialColumns = [
  {
    accessorKey: "variety",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Variety" />
    ),
    cell: ({ row }) => (
      <span className="font-bold">{row.getValue("variety")}</span>
    ),
  },
  {
    accessorKey: "plots",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trial plots" />
    ),
  },
  {
    accessorKey: "yield",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Yield t/ac" />
    ),
  },
  {
    accessorKey: "zone",
    header: "Zones",
  },
];

const yieldData = [
  { season: "2021", harveys: 4.1, competitor: 3.4 },
  { season: "2022", harveys: 4.6, competitor: 3.6 },
  { season: "2023", harveys: 4.4, competitor: 3.9 },
  { season: "2024", harveys: 5.2, competitor: 4.0 },
  { season: "2025", harveys: 5.0, competitor: 4.2 },
];

const yieldConfig = {
  harveys: { label: "Harvey's", color: "#296533" },
  competitor: { label: "Competitor", color: "#a6dbaf" },
};

function TrialsDataTable() {
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data: seedTrials,
    columns: trialColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });

  return (
    <div className="bg-white">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={trialColumns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="px-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

function DeliveryCalendar() {
  const [date, setDate] = React.useState(new Date(2026, 7, 14));
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={new Date(2026, 7)}
      className="inline-block border border-gray-200 bg-white"
    />
  );
}

export default function CatalogueData() {
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
            Data display
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            The seed-tag table: cream header band, small uppercase column
            labels, hairline row rules. Charts run brand green for our line,
            light green for the competition.
          </p>
          <div id="c-table" className="bg-gray-50 p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Table
            </div>
            <div className="bg-white">
              <Table>
                <TableCaption>Recent feed &amp; seed orders.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-bold">{order.id}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === "Completed"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div id="c-data-table" className="bg-gray-50 p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Data Table
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Sortable columns and pagination via TanStack Table, wearing the
              same seed-tag chrome.
            </p>
            <TrialsDataTable />
          </div>
          <div id="c-chart" className="bg-gray-50 p-12 mb-8">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Chart
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Brand green for the Harvey's series, light green for competitors —
              per the data visualization guidelines.
            </p>
            <div className="bg-white p-6 max-w-2xl">
              <ChartContainer config={yieldConfig}>
                <BarChart accessibilityLayer data={yieldData}>
                  <CartesianGrid vertical={false} stroke="#e7e5e4" />
                  <XAxis
                    dataKey="season"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="harveys" fill="var(--color-harveys)" />
                  <Bar dataKey="competitor" fill="var(--color-competitor)" />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 mb-8">
            <div id="c-calendar" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Calendar
                </div>
                <p className="text-gray-500 mb-6 max-w-md">
                  Square cells; the selected day fills forest green.
                </p>
                <DeliveryCalendar />
              </div>
            </div>
            <div id="c-progress" className="w-full lg:w-1/2 p-4">
              <div className="bg-gray-50 p-12 h-full">
                <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
                  Progress
                </div>
                <p className="text-gray-500 mb-6 max-w-md">
                  Sand track, forest fill — the quiz progress bar.
                </p>
                <div className="max-w-md">
                  <Progress value={62} />
                  <p className="mt-3 font-heading text-xs font-bold uppercase tracking-widest text-green-500">
                    Step 5 of 8
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="c-alert" className="bg-gray-50 p-12">
            <div className="px-2 py-1 mb-4 font-bold inline-block bg-orange-500 text-white">
              Alert
            </div>
            <div className="max-w-xl">
              <Alert className="mb-6">
                <AlertTitle>Pickup ready</AlertTitle>
                <AlertDescription>
                  Your custom feed order is bagged and waiting at the mill
                  counter.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Not plantable in your zone</AlertTitle>
                <AlertDescription>
                  This variety won't overwinter north of zone 6 — consider the
                  winter-hardy mix instead.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
