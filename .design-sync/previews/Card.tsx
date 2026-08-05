import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from 'app';

// Flat product card on the wheat surface — hairline border, no shadow.
export const ProductCard = () => (
  <div className="bg-yellow-50 p-8">
    <Card className="max-w-sm">
      <CardHeader>
        <Badge variant="secondary" className="self-start mb-2">Seed</Badge>
        <CardTitle>Forage Oats</CardTitle>
        <CardDescription>Quick-establishing cover with strong fall grazing value.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">50lb bag · plant Aug–Sep · zones 4–7</p>
      </CardContent>
      <CardFooter className="gap-4">
        <Button variant="secondary">Add to cart</Button>
        <Button variant="link">Details</Button>
      </CardFooter>
    </Card>
  </div>
);
