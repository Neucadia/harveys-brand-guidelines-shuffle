import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from 'app';

// Hairline divider with wheat grip handle.
export const SplitPanels = () => (
  <div className="bg-white p-8">
    <ResizablePanelGroup direction="horizontal" className="max-w-md border border-gray-200">
      <ResizablePanel defaultSize={60}>
        <div className="flex h-32 items-center justify-center bg-yellow-50 p-6">
          <span className="font-heading text-xs font-bold uppercase tracking-widest">Map</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <div className="flex h-32 items-center justify-center p-6">
          <span className="font-heading text-xs font-bold uppercase tracking-widest">Soil facts</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
);
