import React, { useEffect, useState } from "react";
import LargeCard from "../../../components/card/LargeCard";
import LargeCardNotPaid from "../../../components/card/LargeCardNotPaid";
import axiosInstance from "../../../api/axiosInstance";
import {
  displayErrorNotification,
  displaySuccessNotification,
} from "../../../utils/Toast";
import { Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const MapCardData = () => {
  const [data, setData] = useState([]);
  const [subscription, setSubscription] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const getScholarship = async () => {
    try {
      const res = await axiosInstance.get(`/scholarship?page=${pageNumber}`);
      setData(res?.data?.data);
      setSubscription(res.data.subscription);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (fav) => {
    try {
      const res = await axiosInstance.post("/user/favourites", {
        id: fav,
      });
      if (res.status == 201) {
        displaySuccessNotification(`${res.data.message}`);
      } else {
        displayErrorNotification(`${res.data.message}`);
      }
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

  const truncateText = (text, maxWords) => {
    const wordsArray = text.split(" ");
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  };

  useEffect(() => {
    getScholarship();
  }, []);

  return (
    <div style={{ width: "100%", marginBottom: "20rem" }}>
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
        {subscription
          ? data.map((dta) => (
              <LargeCard
                key={dta._id}
                title={dta.title}
                formatDate={dta.deadline}
                award={dta.award}
                subText={truncateText(dta.about, 6)}
                about={dta.about}
                id={dta._id}
                link={dta.link}
                onClick={() => handleClick(dta._id)}
              />
            ))
          : data.map((dta) => (
              <LargeCardNotPaid
                key={dta.id}
                title={dta.title}
                formatDate={dta.deadline}
                award={dta.award}
                subText={truncateText(dta.about, 7)}
                about={dta.about}
                link={dta.link}
                type="Award"
              />
            ))}
      </InfiniteScroll>
    </div>
  );
};

export default MapCardData;
