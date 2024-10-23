import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void; // Function to handle the delete action
  heading: string; // Heading to be passed from parent
  content: string; // Content message to be passed from parent
}

export function DeleteModal({ open, onClose, onDelete, heading, content }: DeleteModalProps) {

  const handleDelete = () => {
    // Handle delete logic here (e.g., API call, state update)
    onDelete(); // Call the delete handler
    onClose(); // Close the modal after deletion
  };

  const handleCancel = () => {
    onClose(); // Close the modal without deleting
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[30rem]">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle> {/* Dynamic heading */}
        </DialogHeader>
        <div className="py-4">
          <p>{content}</p> {/* Dynamic content */}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
