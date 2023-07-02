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
		<div class="pricing6 py-5 bg-light">
        				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-8 text-center">
							<h3 class="mb-3">Pricing to make your Work Effective</h3>
							<h6 class="subtitle font-weight-normal">
								We offer 100% satisafaction and Money back Guarantee
							</h6>
						</div>
					</div>
					<div className="d-flex justify-content-center">

					{plans?.map((dta) => (
				<PaymentCard key={dta._id} data={dta} />
			))}
		</div>
		</div>

		</div>

	);
}
