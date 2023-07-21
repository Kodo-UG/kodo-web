import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import { FaCheck } from "react-icons/fa";

const PaymentCard = ({ data }) => {
	const { details } = data;
	const history = useHistory();
	const [dataUser, setDataUser] = useState();

	useEffect(() => {
		setDataUser(JSON.parse(localStorage.getItem("userData")));
	}, []);

	const config = {
		public_key: "FLWPUBK_TEST-02518ab938416219120df2c5cf3e056c-X",
		tx_ref: Date.now(),
		amount: data.amount,
		currency: "USD",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: `${dataUser?.user.email}`,
			phone_number: `${dataUser?.user.phone}`,
			name: `${dataUser?.user.fname}`
		},
		customizations: {
			title: "Kodo Scholarships Subscription",
			description: "Payments for Kodo Scholarships subscription",
			logo: "https://res.cloudinary.com/itgenius/image/upload/v1688120420/logo_ab67xw.ico"
		}
	};

	const handleFlutterPayment = useFlutterwave(config);

	const subscribe = async (status, id) => {
		try {
			const data = JSON.stringify({
				plan: id,
				status: status
			});

			const url =
				"https://demo.kodoscholarships.com/api/v1/payment/subscription";

			const headers = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${dataUser.token}`
			};

			const response = await axios.post(url, data, { headers });

			if (response.status == "201" && status == "successful") {
				displaySuccessMessage("Subscription successful");
				history.push("/scholars");
			} else {
				displayErrorMessage("Subscription failed try again later");
				history.push("/scholars");
			}
		} catch (error) {
			throw error;
		}
	};

	return (
		<div className="">
			<div className="payment-cards-container" style={containerStyle}>
				<div className="payment-card" style={cardStyle}>
					<p className="price" style={priceStyle}>
						$ {data.amount}
					</p>
					<p>{data.interval.toUpperCase()}</p>
					<div style={jointBackgroundStyle}>
						<div style={blueBackgroundStyle}>
							<p style={{ ...centeredText, fontWeight: "normal" }}>
								No Trial
							</p>
						</div>
						<p style={{ ...noSavingsTextStyle, fontWeight: "bold" }}>
							No Savings
						</p>
					</div>
					<p
						style={{
							...centeredText,
							fontWeight: "bold",
							fontSize: "16px",
							color: "#1C2755",
							margin: 0
						}}
					>
						{data.amount == "10" && "1"}
						{data.amount == "30" && "6"}
						{data.amount == "60" && "12"}
					</p>
					<p
						style={{
							...centeredText,
							fontWeight: "bold",
							fontSize: "16px",
							color: "#1C2755",
							margin: 0
						}}
					>
						{data.amount == "10" && "Month"}
						{data.amount == "30" && "Months"}
						{data.amount == "60" && "Months"}
					</p>
					<button
						onClick={() => {
							handleFlutterPayment({
								callback: async (response) => {
									await subscribe(response.status, data._id);
									closePaymentModal(); // this will close the modal programmatically
								},
								onClose: (data) => {}
							});
						}}
						style={buttonStyle}
					>
						Select
					</button>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

// Inline CSS styles
const containerStyle = {
	display: "flex",
	justifyContent: "center",
	flexWrap: "wrap"
};

const cardStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: "#ffffff",
	boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Improved box shadow
	padding: "20px",
	width: "200px",
	margin: "10px",
	borderRadius: "8px"
};

const priceStyle = {
	color: "#1C2755",
	fontSize: "24px",
	fontWeight: "bold"
};

const jointBackgroundStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	background: "#f57f9e", // Joint background color for "No Trial" and "No Savings"
	borderRadius: "8px",
	width: "100%",
	marginBottom: "10px"
};

const blueBackgroundStyle = {
	background: "#F5527D",
	borderRadius: "8px",
	width: "100%"
};

const centeredText = {
	color: "#ffffff",
	padding: "4px",
	textAlign: "center" // Center the "No Trial" text within the blue background
};

const noSavingsTextStyle = {
	color: "#ffffff",
	padding: "4px"
};

const scholarshipStyle = {
	display: "flex",
	justifyContent: "center",
	fontSize: "16px",
	margin: "1rem",
	marginTop: "20px"
};
const buttonStyle = {
	backgroundColor: "#ffffff",
	color: "#1C2755", // White text color
	border: "1px solid #CCCCCC", // Smooth gray border
	padding: "10px 20px", // Adjust padding as needed
	borderRadius: "6px", // Rounded corners
	cursor: "pointer",
	width: "100%"
};

export default PaymentCard;
