import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";
import { useHistory } from "react-router-dom";
const PaymentCard = ({ data }) => {
	const { details } = data;
  const history = useHistory()
  const config = {
    public_key: "FLWPUBK_TEST-02518ab938416219120df2c5cf3e056c-X",
    tx_ref: Date.now(),
    amount: data.amount,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "wafulaallan5@gmail.com",
      phone_number: "0779825056",
      name: "kodo testing",
    },
    customizations: {
      title: "Kodo Scholarships Payments",
      description: "Payments for Kodo Scholarships subscription",
      logo: "https://res.cloudinary.com/itgenius/image/upload/v1688120420/logo_ab67xw.ico",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const subscribe = async(id,status)=>{
    try {
      const userDataString = localStorage.getItem('userData');
      const userData = JSON.parse(userDataString);

			console.log(userData.token);
      const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbm8xOTIwMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NDk2YzE4ZDc3ZGYzMTBkMWU3OWRmNWEiLCJpYXQiOjE2ODc2MDE1OTR9.W_HZn7Z8diK-D3Qjfyg_C8JTcnC2QRjALVh3Dr7Aick";
    const headers = {
      Authorization: `Bearer ${userData.token}`,
    };

    let res = await axios.post("http://165.227.139.53/api/v1/payment/subscription",{
      plan:id,
      status:status
    }, {
      headers,
    });
    console.log(res)
     history.push('/db')
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
    <div className="col-md-4">
    <div className="card card-shadow border-0 mb-4">
      <div className="card-body p-4">
        <div className="d-flex align-items-center">
          <h5 className="font-weight-medium mb-0">{data.title}</h5>
{data.interval =="monthly" &&
          <div className="ml-auto">
            <span className="badge badge-danger font-weight-normal p-2">Popular</span>
          </div>
}
        </div>
        <div className="row">
          <div className="col-lg-5 text-center">
            <div className="price-box my-3">
              <sup>$</sup>
              <span className="text-dark display-5">{data.amount}</span>
              <h6 className="font-weight-light">{data.interval.toUpperCase()}</h6>
              <button
                style={{ backgroundColor: "#F27251" }}
                className="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
                onClick={()=>handleSubmit(data._id)}
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
