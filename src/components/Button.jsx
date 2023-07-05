import { useDispatch } from "react-redux";
import { updateFormData } from "../toolkit/formReducer";
import "./Button.css";

const MyButton = ({ text, isSelected, onClick }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(updateFormData({ field: "degree", value: text }));
		onClick();
	};

	return (
		<div>
			<div
				onClick={handleClick}
				type="button"
				className={`btn btn-lg ${isSelected ? "selected" : "notSelected"}`}
			>
				{text}
			</div>
		</div>
	);
};

export default MyButton;
