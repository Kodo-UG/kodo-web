import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import KodoImageLoader from "../../components/KodoImageLoader";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "./blog.css";

const BlogDetails = () => {
  // Access the id parameter from the URL.
  const { id } = useParams();
  const [blog, setBlog] = useState("");

  const isSm = useMediaQuery("only screen and (max-width : 700px)");

  const isMd = useMediaQuery(
    "only screen and (min-width : 700px) and (max-width : 1250px)"
  );

  const isLg = useMediaQuery(
    "only screen and (min-width : 1250px) and (max-width : 1300px)"
  );
  const history = useHistory();

  const getBlog = async () => {
    try {
      const res = await axiosInstance.get(`/blogs/${id}`);
      console.log(res.data.data);
      setBlog(res.data.data);
    } catch (error) {}
  };

  //   console.log("BLOG:", blog);

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      {blog?.title ? (
        <div
          style={{
            // height: "100vh",
            marginTop: isSm ? "6rem" : "5rem",
            paddingLeft: isSm ? "2rem" : "5rem",
            paddingRight: isSm ? "2rem" : "5rem",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
            className="p-3 p-md-4  d-flex flex-column flex-md-row"
          >
            <div
              // style={{
              //   overflow: "scroll",
              //   overflowX: "hidden",
              // }}
              className=""
            >
              <div
                style={{
                  height: "300px",
                  marginBottom: isSm
                    ? "80px"
                    : "" || isMd
                    ? "130px"
                    : "" || isLg
                    ? "135px"
                    : "135px",
                }}
                className=""
              >
                <p
                  style={{
                    fontSize: isSm
                      ? "1rem"
                      : "" || isMd
                      ? "2rem"
                      : "" || isLg
                      ? "2.3rem"
                      : "2.3rem",
                  }}
                  className="font-weight-bold"
                >
                  {" "}
                  {blog?.title}
                </p>
                <KodoImageLoader src={blog?.image} alt="blogImage" />
              </div>

              <div
                style={{
                  backgroundColor: "#1c2755",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 6,
                }}
                className="w-100 d-flex flex-row p-2 px-4  "
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: isSm ? "100%" : "" || isMd ? "50%" : "",
                  }}
                  className=""
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "2px solid #EC1D64",
                    }}
                    className="me-4"
                  >
                    <KodoImageLoader src={blog?.image} alt="blogImage" />
                  </div>

                  <button
                    style={{
                      textAlign: "left",
                      marginRight: "1rem",
                      fontSize: "10px",
                    }}
                    className=" text-white"
                  >
                    <span style={{ fontWeight: "bold" }}>Posted By</span>

                    <br />
                    <span
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      {blog?.creator?.fname}
                    </span>
                  </button>

                  <button
                    style={{
                      textAlign: "left",
                      fontSize: "10px",
                    }}
                    className="text-white"
                  >
                    <span style={{ fontWeight: "bold" }}>Posted On</span>

                    <br />
                    <span
                      style={{
                        opacity: "0.7",
                      }}
                    >
                      {moment(blog?.creator?.createdAt).format("MM-DD-YYYY")}
                    </span>
                  </button>
                </div>

                <button
                  style={{
                    display: isSm && "none",
                    backgroundColor: "#EC1D64",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    paddingRight: "1rem",
                    paddingLeft: "1rem",
                    paddingTop: ".1rem",
                    paddingBottom: ".1rem",
                    borderRadius: 10,
                  }}
                  className="mr-6"
                >
                  Apply
                </button>
              </div>

              <div
                style={{
                  textAlign: "justify",
                  lineHeight: "2rem",
                }}
                className="mt-5"
              >
                {blog?.description}
              </div>
            </div>

            <div
              style={{
                marginLeft: "3rem",
                display: isSm ? "none" : "" || isMd ? "none" : "flex",
                width: "2000px",
              }}
            >
              <div
                style={{
                  height: "70%",

                  background: "white",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  borderRadius: "5px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "#1c2755",
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: isSm ? "1rem" : "1.3rem",
                  }}
                >
                  Resources
                </h3>
                <div
                  style={{
                    height: "70%",
                    marginBottom: "2rem",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/itgenius/image/upload/v1690692705/interracial_qodm9k.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="resource"
                  />
                </div>
                <p>
                  You can checkout more details about kodo scholarship from our
                  blog site .
                </p>
                <button
                  className="shadow-sm"
                  style={{
                    border: "2px solid #1c2755",
                    borderRadius: "5px",
                    padding: "0.6rem",
                    fontWeight: "bold",
                    color: "#1c2755",
                  }}
                  onClick={() => {
                    history.push("/blog");
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // marginTop: "8rem",
            }}
          >
            <img
              style={{
                width: "7rem ",
                height: "7rem",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="https://res.cloudinary.com/itgenius/image/upload/v1692167806/Kodo-Scholarship-Loader2-1_b89na9.gif"
              alt="middle"
            />{" "}
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
