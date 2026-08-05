import { Tabs, TabsList, TabsTrigger, TabsContent } from 'app';

// Cream rail; active tab lifts to white with green text.
export const DivisionTabs = () => (
  <div className="bg-white p-8">
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
        Custom rations mixed at the mill.
      </TabsContent>
      <TabsContent value="seed" className="text-sm text-gray-500">
        Field-proven varieties for mid-Michigan.
      </TabsContent>
    </Tabs>
  </div>
);
