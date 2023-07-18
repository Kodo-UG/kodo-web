import { Button } from "antd";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaAward, FaRegCalendarAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const LargeCardNotPaid = ({
  formatDate,
  title,
  subText,
  award,
  link,
  about,
}) => {
  const date = new Date(formatDate);
  const formattedDate = date.toLocaleDateString();
  const history = useHistory();

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          height: "12rem",
          borderRadius: "1rem",
          // marginTop: "1rem",

          boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
          cursor: "pointer",
          // padding: "4px",
          width: "65%",
          marginLeft: "12rem",
        }}
        onClick={() => history.push("/payment")}
      >
        {/* left div */}
        <div
          style={{
            height: "100%",
            width: "100%",
            // justifyContent: "space-between",
            alignItems: "center",
            // background: "red",
            display: "flex",
            flexDirection: "column",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              // paddingTop: ".4rem",
              // marginLeft: "1rem",
              // marginBottom: "2rem",
              backgroundColor: "#125875",
              // marginRight: "1rem",
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: "1rem",

              alignItems: "center",
              display: "flex",
              width: "100%",
              height: "6rem",
              paddingLeft: "1rem",
              paddingRight: "2rem",
            }}
          >
            <div
              className=" "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <img
                src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689711758/Screenshot_from_2023-07-18_23-19-08-removebg-preview_kavcdq.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  // background: "red",
                }}
              />

              <div
                className=""
                style={{
                  // background: "orange",
                  display: "flex",
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1rem"
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  Upgrade Account Required
                </p>
                <p
                  style={{
                    color: "#7E57C2",
                    fontWeight: "normal",
                    fontSize: "16px",
                    display: "flex",
                    
                  }}
                >
                  Access all matched Scholarships
                  <span>
                    <IoIosArrowForward
                      size={25}
                      style={{ color: "#7E57C2", marginLeft: "1rem" }}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              paddingLeft: "1rem",
              paddingRight: "1rem",
                // backgroundColor: "yellow",
              height: "5rem",
              width: "100%",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            {/* left child div */}
            <div
              style={{
                display: "flex",
                padding: ".1rem",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            
              }}
            >
              <div
                style={{
                  // padding: ".1rem",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                  marginTop: "1.52rem",
                  marginLeft: ".8rem",
                }}
              >
                {" "}
                <p
                  style={{
                    marginBottom: "-1px",
                    marginLeft: ".1rem",
                    color: "#4e4b66",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400px",
                  }}
                >
                  Award
                </p>
                <p
                  style={{
                    marginTop: "0px",
                    fontWeight: "bold",
                    color: "#125875",
                    fontSize: "18px",
                    lineHeight: "20px",
                  }}
                >
                  {award}
                </p>
              </div>
            </div>
            {/* middle child */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                // backgroundColor: "yellow",
                height: "5rem",
              }}
            >
              <div
                style={{
                  // padding: ".1rem",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                  marginTop: "1.52rem",
                  marginLeft: ".8rem",
                }}
              >
                {" "}
                <p
                  style={{
                    marginBottom: "-1px",
                    marginLeft: ".1rem",
                    color: "#4e4b66",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400px",
                  }}
                >
                  Deadline
                </p>
                <p
                  style={{
                    marginTop: "0px",
                    fontWeight: "bold",
                    color: "#125875",
                    fontSize: "18px",
                    lineHeight: "20px",
                  }}
                >
                  {formattedDate}
                </p>
              </div>
            </div>
            {/* right child */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                // backgroundColor: "yellow",
                height: "5rem",
              }}
            >
              <div
                style={{
                  // padding: ".1rem",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                  marginTop: "1.52rem",
                  marginLeft: ".8rem",
                }}
              >
                {" "}
                <p
                  style={{
                    marginBottom: "-1px",
                    marginLeft: ".1rem",
                    color: "#4e4b66",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400px",
                  }}
                >
                  Effort
                </p>
                <div
                  style={{
                    marginTop: "0px",
                    fontWeight: "bold",
                    color: "#125875",
                    fontSize: "18px",
                    lineHeight: "20px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      color: "#4e4b66",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                background: "gray",
                height: "100%",
                width: "1px",
                opacity: "0.8"
              }}
            ></div>
            <div
              style={{
                width: "25%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  color: "gray",
                  background: "rgba(152,172,248,1)",
                  borderRadius: "2rem",
                  width: "90%",
                  padding: "0.7rem",
                  opacity: "0.8",
                  fontWeight: "bold",
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeCardNotPaid;
