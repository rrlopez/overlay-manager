import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ open, onClose }: ModalProps) => {
  return (
    <Dialog defaultOpen={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
