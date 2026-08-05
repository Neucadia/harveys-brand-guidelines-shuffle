import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge } from 'app';

// Cream header band, uppercase column labels, hairline rows.
export const SeedTagTable = () => (
  <div className="bg-white p-8">
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
          <TableCell className="font-bold">HV-1042</TableCell>
          <TableCell>Forage Oats 50lb</TableCell>
          <TableCell><Badge>Completed</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold">HV-1044</TableCell>
          <TableCell>Clover Mix 25lb</TableCell>
          <TableCell><Badge variant="destructive">Pending</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
