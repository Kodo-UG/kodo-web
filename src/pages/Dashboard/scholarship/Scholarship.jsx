import axios from "axios";
import React, { useState, useEffect } from "react";

import { useMediaQuery } from "@uidotdev/usehooks";
import CombinedScholarshipCard from "./CombinedScholarshipCard";
import MapCardData from "./MapCardData";
import { Button } from "antd";
import axiosInstance from "../../../api/axiosInstance";
import { MdArrowForwardIos } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { useHistory } from "react-router-dom";

const Scholarship = () => {
  const [data, setData] = useState([]);
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const isMd = useMediaQuery(
    "only screen and (min-width : 700px) and (max-width : 1250px)"
  );
  const isLg = useMediaQuery(
    "only screen and (min-width : 1250px) and (max-width : 1300px)"
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

  // let handleFetchMore = async () => {
  //   setLoading(true);
  //   setCount(count + 1);
  //   try {
  //     const token = localStorage.getItem("token");
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };

  //     let res = await axios.get(
  //       `https://demo.kodoscholarships.com/api/v1/scholarship?page=${count}`,
  //       {
  //         headers,
  //       }
  //     );

  //     setTotalPages(res.data.totalPages);

  //     // setData((prev) => [...prev, res.data.data]);
  //     setData(res.data.data);
  //     setSubscription(res.data.subscription);
  //   } catch (error) {
  //     // Handle   error here
  //     throw error;
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      <div className="content-wrapper">
        <section style={{ marginBottom: "3rem" }} className="content">
          <div
            style={{
              display: "flex ",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              padding: "2px",
              justifyContent: "center",
            }}
          >
            <div
              onClick={() => history.push("/profile")}
              style={{
                // height: "8rem",
                width: isSm ? "100%" : "" | isMd ? "50%" : "35%",
                background: "white",
                display: "flex",
                marginTop: "4rem",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                // padding: "1rem",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "4px",
               
              }}
            >
              <div
                style={{
                  width: isSm ? "" : "100%",
                 
                }}
              >
                <SiFiles
                  size={60} 
                  
                  style={{
                    color: "#1c2755",
                    padding: isSm? "1rem" : "0.5rem",
                  }}
                />
              </div>
              <div
                style={{
                  // height: "100%",

                  width: "100rem",
                  padding: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  //   alignItems: "center",
                  justifyContent: "center",
                  //   background: "red",
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: isSm ? "16px" : "24px",
                    color: "#1c2755",
                    fontWeight: "bold",
                     marginTop:  isSm? "1rem" : "",
                    marginBottom:  isSm? "-0.1rem" : "",
                    // letterSpacing: "1px"
                  }}
                >
                  $14,500 In Matches
                </p>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: isSm ? "14px" : "16px",
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "1px",
                    fontWeight: 500,
                    textAlign: "justify",
                    color: "#000",
                    // marginBottom: isSm ? "" : "-0.8rem",
                    justifyContent: "space-between",
                  }}
                >
                  Update your profile to match to more
                  <MdArrowForwardIos />
                </p>{" "}
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: isSm ? "14px" : "16px",
                    fontWeight: 500,
                    color: "#000",
                    marginTop: isSm? "-1rem" : "",
                  }}
                >
                  scholarships.
                </p>
              </div>
            </div>

            {/* end of card */}
            <div
              style={{
                fontWeight: 300,
                fontSize: "30px",
                margin: "5px",
                padding: "10px",
                // marginTop: "3rem",
                fontFamily: "Poppins",
                lineHeight: "45px",
              }}
            >
              {data.length < 0 ? (
                <div
                  style={{
                    letterSpacing: "2px",
                    color: "rgb(74,74,74)",
                  }}
                >
                  No Available scholarships for this program
                </div>
              ) : (
                <div
                  style={{
                    letterSpacing: "2px",
                    color: "#1c2755",
                    fontSize: isSm ? "1.6rem" : "",
                  }}
                >
                  Latest Scholarships
                </div>
              )}
            </div>
            {/* <DashboardCard>
							
						</DashboardCard> */}
            {isSm ? <CombinedScholarshipCard /> : <MapCardData />}
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            {count < totalPages && (
              <Button
                style={{
                  width: "12rem",
                  backgroundColor: "#1d2755",
                  color: "#fff",
                  fontWeight: "bold",
                  marginBottom: "3rem",
                }}
                onClick={() => handleFetchMore()}
              >
                {loading ? "loading...." : "Load More"}
              </Button>
            )}
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Scholarship;
