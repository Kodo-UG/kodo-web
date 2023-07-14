import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3"

const Payments = () => {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const config = {
    public_key: "FLWPUBK-c0a2bbbc88f38c522c6a798a8af45364-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "UGX",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "Kodo Scholarships Payments",
      description: "Payments for Kodo Scholarships",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="Payments">
    <div className="container">
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
       <button
          onClick={() =>
            handleFlutterPayment({
              callback: (response) => {
                
                closePaymentModal();
              },
              onClose: () => {},
            })
          }
        >
          Pay
        </button>
      </div>
    </div>
  )
}

export default Payments