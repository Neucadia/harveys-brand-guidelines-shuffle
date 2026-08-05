import React from "react";
import { TriangleAlert } from "lucide-react";
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

const orders = [
  { id: "HV-1042", product: "Forage Oats 50lb", status: "Completed", total: "$38.50" },
  { id: "HV-1043", product: "Layer Feed 40lb", status: "Completed", total: "$21.75" },
  { id: "HV-1044", product: "Clover Mix 25lb", status: "Pending", total: "$64.00" },
];

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
            labels, hairline row rules.
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
