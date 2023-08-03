import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLogout, AiOutlineBell } from "react-icons/ai";
import { Dropdown, Affix, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { HiMenuAlt1 } from "react-icons/hi";
import axiosInstance from "../../api/axiosInstance";
import { useQuery, useQueryClient } from "react-query"; // Import React Query hooks
import { useDispatch } from "react-redux";
import { clearScholarships } from "../../toolkit/scholarshipReducer";
const MyHeader = () => {
  const history = useHistory();
  const queryClient = useQueryClient(); // Get the queryClient instance
  const [isPushMenuVisible, setPushMenuVisible] = useState(false);
   const dispatch = useDispatch()
  const togglePushMenu = () => {
    setPushMenuVisible(!isPushMenuVisible);
  };

  const info = JSON.parse(localStorage.getItem("userData"));

  // Fetch notifications data using React Query
  const { data: notifications } = useQuery(
    "/user/notifications",
    fetchNotifications
  );

  async function fetchNotifications() {
    try {
      const res = await axiosInstance.get("/user/notifications");
      return res.data.data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch notifications");
    }
  }

  const HandleClick = async (id) => {
    try {
      await axiosInstance.patch(`/user/notifications/${id}`);
      queryClient.invalidateQueries("/user/notifications"); // Invalidate the query to update the data
    } catch (error) {
      throw error;
    }
  };

  const items = [
    {
      label: (
        <Link to="/profile">
          <Link to="/profile">
            <Affix align="center">
              <UserOutlined style={{ marginRight: "4px" }} />
              <span style={{ color: "black" }}>Profile Settings</span>
            </Affix>
          </Link>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="/login"
          onClick={(e) => {
            e.preventDefault();
            handleLogout(); // Call the handleLogout function when clicking logout
          }}
        >
          <Affix style={{ display: "flex" }} align="">
            <LogoutOutlined style={{ marginRight: "4px" }} />
            <span>Log out</span>
          </Affix>
        </a>
      ),
      key: "1",
    },
  ];

  // Clear the cache and log out the user
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    queryClient.clear(); // Clear the entire cache
    dispatch(clearScholarships())
    history.push("/login");
  };

  return (
    <div>
      <nav
        className={`main-header navbar fixed-top navbar-expand navbar-white navbar-light ${
          isPushMenuVisible ? "sidebar-open" : ""
        }`}
      >
        {/* ... */}
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="#" className="nav-link" onClick={togglePushMenu}>
              <HiMenuAlt1
                style={{
                  color: "red",
                  width: "3rem",
                  height: "2rem",
                  fontWeight: "bolder",
                }}
              />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className=" ">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <AiOutlineBell style={{ width: "20px", height: "20px" }} />{" "}
              <span className="badge badge-danger navbar-badge">
                {notifications?.length || 0}
              </span>
            </a>
            {/* ... */}
          </li>
          {/* Notifications Dropdown Menu */}
          <li
            style={{ marginLeft: "1rem", marginRight: ".1rem" }}
            className="nav-item "
          >
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              style={{ cursor: "pointer" }}
            >
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Space>
                  <img
                    style={{ padding: "", cursor: "pointer" }}
                    class="rounded-circle header-profile-user"
                    src={`https://ui-avatars.com/api/name=${info?.user?.fname}&background=random`}
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
                    alt=""
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
                onClick={handleLogout}
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
                <div>Logout</div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyHeader;
