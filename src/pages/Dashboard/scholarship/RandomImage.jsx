import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { useHistory } from "react-router-dom";

const RandomImageModal = ({ visible, closeModal, images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const history = useHistory();

	useEffect(() => {
		const interval = setInterval(showRandomImage, 50000); // Change image every 5 seconds

		return () => {
			clearInterval(interval);
		};
	}, [currentImageIndex]); // Only re-run the effect if currentImageIndex changes

	const getRandomIndex = () => {
		return Math.floor(Math.random() * images.length);
	};

	const showRandomImage = () => {
		const newIndex = getRandomIndex();
		setCurrentImageIndex(newIndex);
	};

	const handleClick = () => {
		if (window.location.pathname === "/") {
			history.push("/stepper");
		} else {
			history.push("/stepper");
		}
	};

	return (
		<Modal
			centered
			visible={visible}
			onCancel={closeModal}
			cancelText="close"
			okText=""
			wrapClassName="modalStyle"
			style={{ padding: 0 }}
			bodyStyle={{ padding: 0 }}
			keyboard
			zIndex={1000}
			footer={null}
		>
			<img
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderRadius: 10,
					padding: 2
				}}
				src={images[currentImageIndex]}
				alt=""
			/>
			<div
				style={{
					alignItems: "center",
					justifyContent: "right",
					display: "flex",
					padding: 4
				}}
			>
				{window.location.pathname === "/scholars" ? (
					""
				) : (
					<Button
						type="primary"
						onClick={window.location.pathname === "/" && handleClick}
						style={{
							background: "none",
							border: `2px solid #ec1d64`,
							color: "#ec1d64",
							padding: 2,
							width: "8rem"
						}}
					>
						{window.location.pathname === "/" && "Register Now"}
					</Button>
				)}

				<Button
					type="primary"
					onClick={closeModal}
					style={{
						background: "none",
						border: `2px solid #ec1d64`,
						color: "#ec1d64",
						padding: 2,
						width: "5rem",
						marginLeft: "1rem"
					}}
				>
					Close
				</Button>
			</div>
		</Modal>
	);
};

export default RandomImageModal;
