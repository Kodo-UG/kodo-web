import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";

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
		currency: "UGX",
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
		<div className="col-md-4">
			<div className="card card-shadow border-0 mb-4">
				<div className="card-body p-4">
					<div className="d-flex align-items-center">
						<h5 className="font-weight-medium mb-0">{data.title}</h5>
						{data.interval == "monthly" && (
							<div className="ml-auto">
								<span className="badge badge-danger font-weight-normal p-2">
									Popular
								</span>
							</div>
						)}
					</div>
					<div className="row">
						<div className="col-lg-5 text-center">
							<div className="price-box my-3">
								<sup>$</sup>
								<span className="text-dark display-5">
									{data.amount}
								</span>
								<h6 className="font-weight-light">
									{data.interval.toUpperCase()}
								</h6>
								<button
									style={{ backgroundColor: "#ec1d64" }}
									className="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
									// onClick={() => handleSubmit(data._id)}
									onClick={() => {
										handleFlutterPayment({
											callback: async (response) => {
												await subscribe(response.status, data._id);
												closePaymentModal(); // this will close the modal programmatically
											},
											onClose: (data) => {}
										});
									}}
								>
									CHOOSE PLAN
								</button>
							</div>
						</div>
						<div className="col-lg-7 align-self-center">
							<ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
								<li className="py-2">
									<i className="icon-check text-info mr-2"></i>
									<span>{data.subtitle}</span>
								</li>
								<li className="py-2">
									<i className="icon-check text-info mr-2"></i>
									<span>Daily upadates</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentCard;
