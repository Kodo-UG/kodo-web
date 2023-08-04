import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { BsArrowLeft } from "react-icons/bs";
import { useMediaQuery } from "@uidotdev/usehooks";

const Menu = ({ setShowContent }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [data, setData] = useState();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleActive = (buttonName) => {
    setActiveButton(buttonName);
  };

  const isButtonActive = (buttonName) => {
    return activeButton === buttonName;
  };

  const fetchNotifications = async () => {
    let res = await axiosInstance.get("/user/notifications");

    setData(res.data.data);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <div>
      <div>
        <aside
          className={`main-sidebar sidebar-dark-primary elevation-4  ${
            !sidebarVisible ? "sidebar-closed" : ""
          }`}
          style={{ backgroundColor: "#1c2755" }}
        >
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // paddingLeft: "1rem",
              // paddingRight: "1rem",
              // margin: "1rem"
            }}
          >
            <div
              className="bg-primar"
              style={{ height: "100%", width: "100%" }}
            >
              <div
                className="brand-link "
                style={{
                  height: "50px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/">
                  <img
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "contain",
                      marginLeft: "-.1rem",
                    }}
                    src="https://res.cloudinary.com/itgenius/image/upload/v1688915710/logo-urayana_ap1o8i.png"
                    alt="kodo Logo"
                    className="brand-imag"
                  />
                </Link>
                <div
                  className=""
                  style={{
                    height: "40px",
                    width: "40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                  data-widget="pushmenu"
                >
                  {" "}
                  {isSmallDevice ? (
                    <BsArrowLeft size={20} style={{ color: "red" }} />
                  ) : null}
                </div>
              </div>{" "}
              {/* <span
							style={{
								fontSize: "15px",
								color: "#125875",
								fontWeight: "bold"
							}}
							className="brand-text font-weight-light"
						>
							.{" "}
						</span> */}
            </div>
          </div>
          <div style={{ backgroundColor: "#1c2755" }} className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item " onClick={() => setShowContent(0)}>
                  <Link
                    onClick={() => handleActive("scholarships")}
                    to="/scholars"
                    className={`nav-link ${
                      isButtonActive("scholarships") ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        padding: ".9rem",
                      }}
                    >
                      Dashboard
                      {data?.length > 0 ? (
                        <span className="right badge badge-danger">New</span>
                      ) : null}
                    </p>
                  </Link>
                </li>

                <li className="nav-item" onClick={() => setShowContent(0)}>
                  <Link
                    onClick={() => handleActive("dashboard")}
                    to="/scholars"
                    className={`nav-link ${
                      isButtonActive("dashboard") ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-trophy" aria-hidden="true"></i>{" "}
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        padding: ".9rem",
                      }}
                    >
                      Matched Scholarship
                    </p>
                  </Link>
                </li>

                <li className="nav-item" onClick={() => setShowContent(1)}>
                  <Link
                    onClick={() => handleActive("favorites")}
                    to="/scholars"
                    className={`nav-link ${
                      isButtonActive("favorites") ? "active" : ""
                    }`}
                  >
                    <i
                      style={{ marginLeft: "3px" }}
                      className="fa fa-bookmark"
                      aria-hidden="true"
                    ></i>

                    <p
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        padding: ".9rem",
                        marginLeft: "4px",
                      }}
                    >
                      Favorites
                    </p>
                  </Link>
                </li>

                <li className="nav-item" onClick={() => setShowContent(2)}>
                  <Link
                    onClick={() => handleActive("jobs")}
                    to="/scholars"
                    className={`nav-link ${
                      isButtonActive("jobs") ? "active" : ""
                    }`}
                  >
                    <i
                      style={{ marginLeft: "3px" }}
                      className="fa fa-briefcase"
                      aria-hidden="true"
                    ></i>

                    <p
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        padding: ".9rem",
                        marginLeft: "4px",
                      }}
                    >
                      Jobs
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Menu;
