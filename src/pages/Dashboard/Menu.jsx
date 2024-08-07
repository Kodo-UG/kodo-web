import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { clearScholarships } from "../../toolkit/scholarshipReducer";
import { clearJobData } from "../../toolkit/jobReducer";
import { clearFormData } from "../../toolkit/formReducer";

const Menu = ({ setShowContent }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [data, setData] = useState();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const history = useHistory();
    const queryClient = useQueryClient(); // Get the queryClient instance
    const dispatch = useDispatch();
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    const handleActive = (buttonName) => {
        setActiveButton(buttonName);
    };

    const isButtonActive = (buttonName) => {
        return activeButton === buttonName;
    };

    const fetchNotifications = async () => {
        let res = await axios.get(
            "https://api.kodoscholarship.com/api/v1/user/notifications",
            config
        );

        setData(res.data.data);
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    const myStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };

    const pStyle = {
        color: "#fff",
        fontWeight: "bold",
        padding: ".9rem",
        marginLeft: "4px",
    };

    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        localStorage.removeItem("refer");
        localStorage.setItem("modal2Open", "true");
        dispatch(clearScholarships());
        dispatch(clearFormData());
        dispatch(clearJobData());
        queryClient.clear();
        history.push("/login");
    };
    return (
        <div>
            <div>
                <aside
                    className={`main-sidebar sidebar-dark-primary elevation-4  ${!sidebarVisible ? "sidebar-closed" : ""
                        }`}
                    style={{ backgroundColor: "#1c2755" }}
                >
                    <div className="" style={myStyle}>
                        <div
                            className="bg-primar"
                            style={{ height: "100%", width: "100%" }}
                        >
                            <div
                                className="brand-link "
                                style={{
                                    ...myStyle,
                                    height: "50px",
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
                                        src="/images/logo1.png"
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
                                        <BsArrowLeft
                                            size={20}
                                            style={{ color: "red" }}
                                        />
                                    ) : null}
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                    <div
                        style={{ backgroundColor: "#1c2755" }}
                        className="sidebar"
                    >
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                <li
                                    className="nav-item "
                                    onClick={() => setShowContent(0)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() =>
                                            handleActive("scholarships")
                                        }
                                        to="/scholars"
                                        className={`nav-link ${isButtonActive("scholarships")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <i
                                            className="fa fa-graduation-cap"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        <p style={pStyle}>
                                            Dashboard
                                            {data?.length > 0 ? (
                                                <span className="right badge badge-danger">
                                                    New
                                                </span>
                                            ) : null}
                                        </p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(0)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() =>
                                            handleActive("dashboard")
                                        }
                                        to="/scholars"
                                        className={`nav-link ${isButtonActive("dashboard")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <i
                                            className="fa fa-trophy"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        <p style={pStyle}>
                                            Matched Scholarship
                                        </p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(1)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() =>
                                            handleActive("favorites")
                                        }
                                        to="/scholars"
                                        className={`nav-link ${isButtonActive("favorites")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <i
                                            style={{ marginLeft: "3px" }}
                                            className="fa fa-bookmark"
                                            aria-hidden="true"
                                        ></i>

                                        <p style={pStyle}>Favorites</p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(2)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() => handleActive("jobs")}
                                        to="/scholars"
                                        className={`nav-link ${isButtonActive("jobs")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <i
                                            style={{ marginLeft: "3px" }}
                                            className="fa fa-briefcase"
                                            aria-hidden="true"
                                        ></i>

                                        <p style={pStyle}>Jobs</p>
                                    </Link>
                                </li>

                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(4)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() => handleActive("invite")}
                                        to="/scholars"
                                        className={`nav-link ${isButtonActive("invite")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <i
                                            style={{ marginLeft: "3px" }}
                                            className="fa fa-share"
                                            aria-hidden="true"
                                        ></i>

                                        <p style={pStyle}>Invite Friends</p>
                                    </Link>
                                </li>
                                <li
                                    className="nav-item"
                                    onClick={() => setShowContent(4)}
                                    data-widget="pushmenu"
                                >
                                    <Link
                                        onClick={() => handleLogout()}
                                        to=""
                                        className={`nav-link ${isButtonActive("log")
                                            ? "active"
                                            : ""
                                            }`}
                                    >
                                        <i
                                            style={{
                                                color: "#EB1E5E",
                                                marginLeft: "3px",
                                            }}
                                            class="fa fa-sign-out"
                                            aria-hidden="true"
                                        ></i>
                                        <p
                                            style={{
                                                ...pStyle,
                                                color: "#EB1E5E",
                                            }}
                                        >
                                            Log out
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
