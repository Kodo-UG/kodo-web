import React, { useEffect, useState } from "react";
import PaymentCard from "../../components/PaymentPlans";
import axios from "axios";
import { AiFillCheckCircle  } from 'react-icons/ai'; 
import { useMediaQuery } from "@uidotdev/usehooks";


export default function Payment() {
  const [plans, setPlans] = useState();
  const [loading, setLoading] = useState(false);
  const isSm = useMediaQuery("only screen and (max-width : 700px)");

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


  const info=[
    {
      id:1,
      text:"Access To The #1 Scholarship Database"
    },
    {
      id:2,
      text:"New Scholarship Matches Every Month"
    },
    {
      id:3,
      text:"More Than $10 Million Won To Date"
    }
  ]

  return (
    <div className="pricing6 py-5 bg-light">
      <div style={{ padding: "5rem" }} className="container">
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
            <div style={{marginTop:"20px"}}>
            {info.map(data=>(
                           <div key={data.id}  className="scholarship-info" style={ {
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize:'16px',
                            margin:"10px",
                            marginTop:"10px",
                            textAlign:"left",
                            width:"100%"
                          }}>
                           <AiFillCheckCircle  style={{ color: 'green', marginRight: '5px' }} />
                           <p>{data.text}</p>
                         </div>
            ))

}
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}


