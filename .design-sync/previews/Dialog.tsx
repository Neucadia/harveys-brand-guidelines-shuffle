import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from 'app';

// Statically open: square white panel on the ink scrim, no shadow.
export const ConfirmDialog = () => (
  <div className="relative h-96 bg-yellow-50 p-8">
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Clear this plot?</DialogTitle>
          <DialogDescription>Your drawn boundary and soil breakdown will be removed.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Keep plot</Button>
          <Button variant="destructive">Clear &amp; redraw</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
);
