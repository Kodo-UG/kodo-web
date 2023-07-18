import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomTab from "../../../components/tab";

import { useMediaQuery } from "@uidotdev/usehooks";
import CombinedScholarshipCard from "./CombinedScholarshipCard";
import LargeCard from "../../../components/card/LargeCard";
import MapCardData from "./MapCardData";
import { Button } from "antd";
import axiosInstance from "../../../api/axiosInstance";
import DashboardCard from "../../../components/card/DashboardCard";
import { MdArrowForwardIos } from "react-icons/md";
import { SiFiles } from "react-icons/si";

const Scholarship = () => {
  const [data, setData] = useState([]);
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  const isSm = useMediaQuery("only screen and (max-width : 900px)");
  const isMd = useMediaQuery(
    "only screen and (min-width : 900px) and (max-width : 1002px)"
  );
  const isLg = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isXl = useMediaQuery("only screen and (min-width : 1201px)");

  const getScholarship = async () => {
    setLoading(true);
    try {
      let res = await axiosInstance.get(
        "https://demo.kodoscholarships.com/api/v1/scholarship"
      );

      setData(res.data.data);
      setSubscription(res.data.subscription);
    } catch (error) {
      // Handle   error here
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getScholarship();
  }, []);

  let handleFetchMore = async () => {
    setLoading(true);
    setCount(count + 1);
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      let res = await axios.get(
        `https://demo.kodoscholarships.com/api/v1/scholarship?page=${count}`,
        {
          headers,
        }
      );

      setData(res.data.data);
      setSubscription(res.data.subscription);
    } catch (error) {
      // Handle   error here
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="content-wrapper">
        <section className="content">
          <div
            style={{
              display: "flex ",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                // height: "8rem",
                width: "50%",
                background: "white",
                display: "flex",
                marginTop: "4rem",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                padding: "1rem",
                alignItems: "center",
                // justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  height: "10rem",
                  width: "25%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <SiFiles
                  size={75}
                  style={{
                    color: "#3259f1",
                  }}
                />
              </div>
              <div style={{ height: "100%", width: "75%", background: "" }}>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    color: "#3259f1",
                    fontWeight: "bold",
                  }}
                >
                  $14,500 In Matches
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "1px",
                  }}
                >
                  Update your profile to match to more
                  <MdArrowForwardIos style={{ marginLeft: "2rem" }} />
                </p>{" "}
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                  }}
                >
                  scholarships.
                </p>
              </div>
            </div>
            <div
              style={{
                fontWeight: "",
                fontSize: "20px",
                margin: "5px",
                padding: "10px",
                marginTop: "4rem",
              }}
            >
              {data.length === 0 ? (
                "No Available scholarships for this program"
              ) : (
                <CustomTab total={data.length} />
              )}
            </div>
            {/* <DashboardCard>
							
						</DashboardCard> */}
            {isSm ? <CombinedScholarshipCard /> : <MapCardData />}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            {data.length > 4 ? (
              <Button
                style={{
                  width: "12rem",
                  backgroundColor: "#125875",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                onClick={() => handleFetchMore()}
              >
                Load More
              </Button>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Scholarship;
