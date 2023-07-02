import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";

const PaymentCard = ({ data }) => {
	const { details } = data;

  const config = {
    public_key: "FLWPUBK_TEST-2c6654d532a83dc9f75241b925ab0d85-X",
    tx_ref: Date.now(),
    amount: data.amount,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "frank.mwesigwa1@gmail.com",
      phone_number: "0779825056",
      name: "Frank Mwesigwa",
    },
    customizations: {
      title: "Kodo Scholarships Payments",
      description: "Payments for Kodo Scholarships",
      logo: "https://res.cloudinary.com/itgenius/image/upload/v1688120420/logo_ab67xw.ico",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const subscribe = async(id,status)=>{
    try {
      const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbm8xOTIwMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NDk2YzE4ZDc3ZGYzMTBkMWU3OWRmNWEiLCJpYXQiOjE2ODc2MDE1OTR9.W_HZn7Z8diK-D3Qjfyg_C8JTcnC2QRjALVh3Dr7Aick";
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    let res = await axios.post("http://165.227.139.53/api/v1/payment/subscription",{
      plan:id,
      status:status
    }, {
      headers,
    });
    console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  const handleSubmit=(id)=>{
    try {
      handleFlutterPayment({
        callback:async(response)=>{
           console.log(response)
          await subscribe(id,response.status)
          closePaymentModal()
        }
      })
    } catch (error) {
  console.log(error)    
    }
  }


	return (
		<div className="payment-plans-container">
			{/* <h1>Payment Plans</h1> */}
			<div className="payment-plans">
				<div className="payment-plan">
					<div className="plan-header">{data.title}</div>
					<div className="plan-body">
						<div className="plan-title">{data.subtitle}</div>

						<div className="plan-price">
							Price: ${data.amount}/{data.interval}
						</div>
						<div className="plan-description">
							{details.map((dt) => (
								<ul>
									<li>{dt.title}</li>
								</ul>
							))}
						</div>
						<button
							style={{ backgroundColor: "#f27251" }}
							className="select-plan-btn"
              onClick={()=>handleSubmit(data._id)}
						>
							Select Plan
						</button>
					</div>
				</div>

				{/* Repeat the above payment-plan div for other payment plans */}
			</div>
		</div>
	);
};

export default PaymentCard;
