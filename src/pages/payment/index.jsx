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
        "https://demo.kodoscholarships.com/api/v1/payment/plans"
      );
      setPlans(data.data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <div className="pricing6 py-5 bg-light">
      <div style={{ padding: "8rem" }} className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h3 className="mb-3">Choose your plan</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column flex-sm-row justify-content-center">
              {plans?.map((dta) => (
                <PaymentCard key={dta._id} data={dta} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
