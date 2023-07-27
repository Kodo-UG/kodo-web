/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLogout, AiOutlineBell } from "react-icons/ai";
import axios from "axios";
import moment from "moment";
import { Dropdown, Affix, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import {HiMenuAlt1} from "react-icons/hi";

const MyHeader = () => {
  const history = useHistory();
  const [data, setData] = useState();

  const [isInputVisible, setInputVisible] = useState(false);

  const handleSearchIconClick = () => {
    setInputVisible(!isInputVisible);
  };

  const token = localStorage.getItem("token");
  const info = JSON.parse(localStorage.getItem("userData"));

  const fetchNotifications = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    let res = await axios.get(
      "https://demo.kodoscholarships.com/api/v1/user/notifications",
      {
        headers,
      }
    );

    setData(res.data.data);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const HandleClick = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.patch(
        `https://demo.kodoscholarships.com/api/v1/user/notifications/${id}`
      );

      fetchNotifications();
    } catch (error) {
      throw error;
    }
  };

  const items = [
    {
      label: (
        <Link to="/profile">
          <a href="/profile">
            <Affix align="center">
              <UserOutlined style={{ marginRight: "4px" }} />
              <span>Profile Settings</span>
            </Affix>
          </a>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("token");
            history.push("/login");
          }}
        >
          <Affix style={{ display: "flex" }} align="">
            <LogoutOutlined style={{ marginRight: "4px" }} />
            <span>Logout</span>
          </Affix>
        </a>
      ),
      key: "1",
    },
  ];
  return (
    <div>
      <nav
        className="main-header navbar 
			fixed-top navbar-expand navbar-white navbar-light "
      >
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
		
            <Link to="#" className="nav-link" data-widget="pushmenu">
              	 <HiMenuAlt1
              style={{
                color: "red",
                width: "3rem",
                height: "2rem",
                fontWeight: "bolder",
                // marginTop: "1rem",
              }}
            />
              {/* <i className="fas fa-bars" /> */}
            </Link>
          </li>
          {/* <li className="nav-item d-none d-sm-inline-block">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li> */}
          {/* <li className="nav-item d-none d-sm-inline-block">
						<Link href="#" className="nav-link">
							Contact
						</Link>
					</li> */}
        </ul>
        {/* SEARCH FORM */}
        {/* <form className="form-inline ml-4">
					<div
						className={`input-group input-group-sm ${
							isInputVisible ? "search-bar-focused" : ""
						}`}
					>
						{isInputVisible && (
							<input
								className="form-control form-control-navbar"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
						)}
						<div className="input-group-append">
							<button
								className={`  ${
									isInputVisible ? "btn-search-active" : ""
								}`}
								type="button"
								onClick={handleSearchIconClick}
							>
								<i
									className={`fas ${
										isInputVisible ? "fa-times" : "fa-search"
									}`}
								/>
							</button>
						</div>
					</div>
				</form> */}
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className=" ">
            <a className="nav-link" data-toggle="dropdown" href="#">
              {/* <i className="far fa-comments" /> */}
              <AiOutlineBell style={{ width: "20px", height: "20px" }} />{" "}
              {/* Adjust the width and height */}
              <span className="badge badge-danger navbar-badge">
                {data?.length || null}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {data?.length > 0 ? (
                data.map((notif) => (
                  <div
                    onClick={() => HandleClick(notif._id)}
                    style={{ cursor: "pointer" }}
                    className="dropdown-item"
                    key={notif._id}
                  >
                    {/* Message Start */}
                    <div className="media">
                      <img
                        src="https://ui-avatars.com/api/name=admin&background=random"
                        alt="User Avatar"
                        className="img-size-50 mr-3 img-circle"
                      />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Admin
                          <span className="float-right text-sm text-danger">
                            <i className="fas fa-star" />
                          </span>
                        </h3>

                        <p className="text-sm">{notif.message}</p>
                        <p className="text-sm text-muted">
                          <i className="far fa-clock mr-1" />
                          {moment(notif.createdAt).from(moment())}
                        </p>
                      </div>
                    </div>
                    {/* Message End */}
                  </div>
                ))
              ) : (
                <div
                  className="dropdown-item"
                  style={{
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontWeight: "bold",
                      color: "#555",
                    }}
                  >
                    No notifications at the moment
                  </p>
                </div>
              )}

              <div className="dropdown-divider" />

              <div className="dropdown-divider" />
              {/* <a href="#" className="dropdown-item dropdown-footer">
								See All Messages
							</a> */}
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li
            style={{ marginLeft: "1rem", marginRight: ".1rem" }}
            className="nav-item "
          >
            {/* <a
							style={{
								justifyContent: "center",
								display: "flex",
								alignItems: "center"
							}}
							className="nav-link"
							data-toggle="dropdown"
							href="#"
						> */}
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              style={{ cusror: "pointer" }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img
                    style={{ padding: "", cursor: "pointer" }}
                    class="rounded-circle header-profile-user"
                    src={`https://ui-avatars.com/api/name=${info.user.fname}&background=random`}
                    alt="User"
                    width={30}
                  />
                </Space>
              </a>
            </Dropdown>
            {/* </a> */}
            <div
              style={{ cursor: "pointer" }}
              className="dropdown-menu dropdown-menu-md dropdown-menu-right"
            >
              <div className="dropdown-divider" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="dropdown-item"
              >
                <div style={{ width: "30px" }} className="">
                  <img
                    src="https://res.cloudinary.com/itgenius/image/upload/v1688438198/6_isfrng.png"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <Link to="/profile">
                    <div className="d-block">Profile</div>
                  </Link>
                </div>
              </div>
              <div className="dropdown-divider" />
              <div
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("token");
                  localStorage.removeItem("userData");

                  history.push("/login");
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "bold",
                  padding: "8px",
                }}
                className="dropdown-item"
              >
                <div data-widget="control-sidebar" data-slide="true">
                  <AiOutlineLogout />
                </div>

                <div>logout</div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyHeader;
