import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLogout, AiOutlineBell } from "react-icons/ai";
import { Dropdown, Affix, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { HiMenuAlt1 } from "react-icons/hi";
import axiosInstance from "../../api/axiosInstance";
import { useQuery, useQueryClient } from "react-query"; // Import React Query hooks
import { useDispatch } from "react-redux";
import { clearScholarships } from "../../toolkit/scholarshipReducer";
import axios from "axios";
import { persistor } from "../../store";
import { AiFillStar } from "react-icons/ai";

const MyHeader = ({ setShowContent }) => {
  const history = useHistory();
  const queryClient = useQueryClient(); // Get the queryClient instance
  const [isPushMenuVisible, setPushMenuVisible] = useState(false);
  const dispatch = useDispatch();
  const [notify, setNotify] = useState([{}]);
  const deleteMessage = (ID) => {
    const newArray = notify.filter((data) => data._id != ID);
    setNotify(newArray);
    return newArray;
  };
  //   useEffect(()=>{
  // 	setNotify()
  //   },[])
  const togglePushMenu = () => {
    setPushMenuVisible(!isPushMenuVisible);
  };

  const info = JSON.parse(localStorage.getItem("userData"));
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  // Fetch notifications data using React Query
  const { data: notifications } = useQuery(
    "/user/notifications",
    fetchNotifications
  );

  async function fetchNotifications() {
    try {
      const res = await axios.get(
        "https://demo.kodoscholarships.com/api/v1/user/notifications",
        config
      );
      console.log(res.data.data);
      setNotify(res.data.data);
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
        <div onClick={() => setShowContent(3)}>
          <Link to="/scholars">
            <div
              align="center"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <UserOutlined
                size={29}
                style={{
                  marginRight: "4px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                }}
              />
              <span style={{ color: "black" }}>Profile </span>
            </div>
          </Link>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          onClick={() => {
            handleLogout();
          }}
        >
          <div style={{ display: "flex" }} align="">
            <LogoutOutlined style={{ marginRight: "4px" }} />
            <span>Log out</span>
          </div>
        </div>
      ),
      key: "1",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    queryClient.clear();
    dispatch(clearScholarships());
    localStorage.setItem("modal2Open", "true");
    history.push("/login");
  };

  return (
    <div>
      <nav
        className={`main-header navbar fixed-top navbar-expand navbar-white navbar-light  ${
          isPushMenuVisible ? "sidebar-open" : ""
        }`}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="#" className="nav-link" data-widget="pushmenu">
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
        <ul className="navbar-nav ml-auto ">
          <li className=" ">
            <Link className="nav-link" data-toggle="dropdown" to="#">
              <img
                src="https://res.cloudinary.com/itgenius/image/upload/v1692586498/Alert_Icon_-01_io86d7.png"
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              {/* <AiOutlineBell style={{ width: "20px", height: "20px" }} />{" "} */}
              <span className="badge badge-danger navbar-badge">
                {notify?.length || 0}
              </span>
            </Link>
            <div
              style={{
                cursor: "pointer",
                minHeight: "25vh",
                width: "20rem",
                backgroundColor: "#F4F6F9",
                border: "none",
                boxShadow: "none",
                opacity: "50px",
              }}
              className="dropdown-menu dropdown-menu-md dropdown-menu-right "
            >
              <ul
                className="text-secondary"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {notify.map((data) => (
                  <li
                    onClick={() => deleteMessage(data._id)}
                    style={{
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "0.2rem",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <AiFillStar
                      size={25}
                      style={{ color: "red", marginRight: "0.5rem" }}
                    />
                    {data.message}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}

          <li
            style={{
              marginLeft: "1rem",
              marginRight: ".1rem",
              marginTop: ".8rem",
            }}
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
                    width={35}
                  />
                </Space>
              </a>
            </Dropdown>
            {/* </a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyHeader;
