import React, { useEffect, useState } from "react";
import PaymentCard from "../../components/PaymentPlans";
import axios from "axios";
export default function Payment() {
	const [plans, setPlans] = useState();
	const [loading, setLoading] = useState(false);
	const getPlans = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(
				"http://165.227.139.53/api/v1/payment/plans"
			);
			setPlans(data.data);
			console.log(plans, "am here sir");
			// console.log(count);
		} catch (error) {
			console.log("failed to fetch");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPlans();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "29px",
				flexWrap: "wrap",
			}}
		>
			{plans?.map((dta) => (
				<PaymentCard key={dta._id} data={dta} />
			))}
		</div>
	);
}
