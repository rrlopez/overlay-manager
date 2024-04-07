function Example1() {

	const handleClick = ()=>{

	}


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button className="btn" onClick={handleClick}>Click Me</button>
			<Modal/>
    </div>
  );
}

function Modal() {
	return (
	<dialog open className="modal">
		<div className="modal-box">
			<h3 className="font-bold text-lg">Hello!</h3>
			<p className="py-4">
				Press ESC key or click the button below to close
			</p>
			<div className="modal-action">
				<form method="dialog">
					<button className="btn">Close</button>
				</form>
			</div>
		</div>
	</dialog>
	)
}

export default Example1;
