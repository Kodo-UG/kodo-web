import React, { useEffect, useState } from "react";
import CardScholarship from "../../../components/card/CardScholarship";
import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";
import { useMediaQuery } from "@uidotdev/usehooks";
import axiosInstance from "../../../api/axiosInstance";
import InfiniteScroll from "react-infinite-scroll-component";

const CombinedScholarshipCard = () => {
  const [data, setData] = useState([]);
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const getScholarship = async () => {
    try {
      const res = await axiosInstance.get(`/scholarship?page=${pageNumber}`);
      setData(res?.data?.data);
      setSubscription(res.data.subscription);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    setPageNumber(pageNumber + 1);
    try {
      const res = await axiosInstance.get(`/scholarship?page=${pageNumber}`);
      setData(data.concat(res?.data?.data));
      setSubscription(res.data.subscription);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getScholarship();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "13rem",
        }}
      >
        <img
          style={{
            width: "7rem ",
            height: "7rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          src="https://res.cloudinary.com/itgenius/image/upload/v1690434896/Kodo_Scholarship_Loader_rgev72.gif"
          alt="middle"
        />{" "}
      </div>
    );
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={
          <h4 style={{ textAlign: "center", padding: "1rem" }}>Loading...</h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Thats all we have for you</b>
          </p>
        }
      >
        <div
          style={{
            //
            padding: "1rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2.5rem",
            marginBottom: isSm ? "20rem" : "",
          }}
        >
          {!subscription &&
            data?.map((dta) => (
              <CardScholarship
                key={dta.id}
                award={dta.award}
                deadline={dta.deadline}
                subscription={subscription}
                text="scholarships"
                type="Award"
              />
            ))}
          {subscription &&
            data?.map((dta) => (
              <CardScholarshipSubscribed
                key={dta.id}
                award={dta.award}
                deadline={dta.deadline}
                subscription={subscription}
                cardTitle={dta.title}
                id={dta._id}
                link={dta.link}
                about={dta.about}
                type="Award"
              />
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CombinedScholarshipCard;
