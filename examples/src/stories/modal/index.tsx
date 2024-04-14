import { OverlayManager, addOverlay } from "@rrlopez/overlay-manager";
import { Modal } from "./Modal"; // your modal component


export const ModalExample = () => {
	const handleClick = () => {
		addOverlay(Modal);
	};

	return (
		<div className="flex items-center justify-center w-full h-full">
			<OverlayManager /> {/*Put this any where on your app, ideally in your root component*/}
			<button className="btn btn-primary btn-bordered" onClick={handleClick}>
				Click Me
			</button>
		</div>
	);
}