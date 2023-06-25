const MyButton = ({ text }) => {
	const handleClick = () => {
		console.log("Clicked:", text);
	};
	return (
		<div>
			<button
				onClick={handleClick}
				type="button"
				class="select-option sonic-btn"
			>
				{text}
			</button>
		</div>
	);
};

export default MyButton;
