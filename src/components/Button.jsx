import { useDispatch } from "react-redux";
import { updateFormData } from "../toolkit/formReducer";

const MyButton = ({ text }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(updateFormData({ field: "degree", value: text }));
	};
	return (
		<div>
			<button
				onClick={handleClick}
				type="button"
				class="select-option sonic-btn"
				style={{
								padding: "15px",
								border: "1px solid #ccc",
								outline: "none",
								transition: "box-shadow 0.3s ease-in-out",
								boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
								fontFamily: "Arial, sans-serif",
								fontSize: "16px",
								lineHeight: "1.5",
								color: "white",
							}}
			>
				{text}
			</button>
		</div>
	);
};

export default MyButton;
