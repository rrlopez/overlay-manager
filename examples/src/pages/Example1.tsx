import { OverlayManager, addOverlay } from "@rrlopez/overlay-manager/dist";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Example1() {
  const handleClick = () => {
    addOverlay(Modal);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <OverlayManager />
      <button className="btn btn-primary btn-bordered" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

function Modal({open, onClose}: {open: boolean, onClose: ()=>null}) {
	
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
}

export default Example1;
