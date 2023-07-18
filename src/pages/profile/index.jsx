// export default index
import React, { useCallback } from "react";
import "./index2.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const isSm = useMediaQuery("only screen and (max-width : 1000px)");

  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [scholarship, setScholarship] = useState([]);
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();

  const [activeTab, setActiveTab] = useState("profileMain");

	const info = JSON.parse(localStorage.getItem("userData"));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataPromise = localStorage.getItem("userData");
        const userData = await userDataPromise;
        const parsedUserData = JSON.parse(userData);
        const userId = parsedUserData.user._id;
        setId(userId);
      } catch (error) {
        throw error;
      }
    };

    fetchUserData();
  }, []);

  const fetchUser = async (id) => {
    try {
      const response = await axiosInstance.get(`/user/profile/${id}`);
      setData(response.data.data);
    } catch (error) {
      throw error;
    }
  };

	const handleInputChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleEditUserInfo = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.patch("/user/profile", {
				fname: firstname,
				lname: lastname
			});

			if (res?.data.data) {
				alert(res?.data.data);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleEditPassword = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await axiosInstance.patch("/user/profile", {
				password: password
			});

			if (res?.data.data) {
				alert(res?.data.data);
			}
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	const getScholarship = async () => {
		setLoading(true);
		try {
			let res = await axiosInstance.get(
				"https://demo.kodoscholarships.com/api/v1/scholarship"
			);

      setScholarship(res.data.data);
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

  useMemo(() => {
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  return (
    <div className="app-content main-content mt-0">
      <div className="side-app">
        {/* CONTAINER */}
        <div
          style={{
            width: "80%",
            marginTop: "5rem",
            marginLeft: isSm ? "" : "19rem",
          }}
          className="main-container container-fluid"
        >
          {/* PAGE-HEADER */}

          {/* PAGE-HEADER END */}

					{/* ROW-1 OPEN */}
					<div className="row" id="user-profile">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col-lg-12 col-md-12 col-xl-6">
											<div className="d-flex flex-wrap align-items-center">
												<div className="profile-img-main rounded">
													<img
														style={{
															padding: "",
															cursor: "pointer"
														}}
														class="rounded-circle header-profile-user"
														src={`https://ui-avatars.com/api/name=${info.user.fname}&background=random`}
														alt="User"
														width={68}
													/>
												</div>
												<div className="ms-4 ">
													<h4
														style={{
															color: "#707070"
														}}
													>
														{data.fname + " " + data.lname}
													</h4>
													<p className="text-muted mb-2">
														{data.email}
													</p>
												</div>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-xl-6">
											<div className="d-md-flex flex-wrap justify-content-lg-end">
												<div className="media m-3">
													<div
														style={{
															padding: "1rem",
															borderRadius: "10px",
															marginBottom: "1rem",
															width: "3rem",
															height: "3rem",
															position: "relative",
															lineHeight: " 3rem",
															textAlign: "center",
															fontSize: "1.43rem",
															display: "flex",
															alignItems: "center",
															justifyContent: "center"
															// borderRadius: "26%",
														}}
														className="media-icon bg-primary me-3 mt-1"
													>
														<i className="fa fa-compass fs-20 text-white"></i>
													</div>
													<div className="media-body">
														<span className="text-muted">
															Matched
														</span>
														<div
															style={{
																fontSize: "2rem",
																marginRight: "2px",
																color: "#707070"
															}}
															className="fw-semibold fs-25"
														>
															{scholarship.length}
														</div>
													</div>
												</div>
												<div className="media m-3">
													<div
														style={{
															padding: "1rem",
															borderRadius: "10px",
															marginBottom: "1rem",
															width: "3rem",
															height: "3rem",
															position: "relative",
															lineHeight: " 3rem",
															textAlign: "center",
															fontSize: "1.43rem",
															display: "flex",
															alignItems: "center",
															justifyContent: "center"
															// borderRadius: "26%"
														}}
														className="media-icon bg-info me-3 mt-1"
													>
														<i className="fa fa-paper-plane fs-20 text-white"></i>
													</div>
													<div className="media-body">
														<span className="text-muted">
															Applied
														</span>
														<div
															style={{
																fontSize: "1.7rem",
																marginRight: "2px",
																color: "#707070"
															}}
															className="fw-semibold fs-25"
														>
															0
														</div>
													</div>
												</div>
												<div className="media m-3">
													<div
														style={{
															padding: "1rem",
															borderRadius: "10px"
														}}
														className="media-icon bg-warning me-3 mt-1"
													>
														<i className="fa fa-bookmark fs-20 text-white"></i>
													</div>
													<div className="media-body">
														<span className="text-muted">
															Favorites
														</span>
														<div
															style={{
																fontSize: "1.7rem",
																marginRight: "2px",
																color: "#707070"
															}}
															className="fw-semibold fs-25"
														>
															0
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="border-top">
									<div className="wideget-user-tab">
										<div className="tab-menu-heading">
											<div
												style={{
													display: "flex",
													flexDirection: "row"
												}}
												className="tabs-menu1 "
											>
												<ul
													style={{
														padding: "1rem"
													}}
													className="nav"
												>
													<li
														style={{
															marginRight: "1rem",
															borderBottom:
																activeTab === "profileMain"
																	? "2px solid red"
																	: "none",
															display: "inline" // Set the li to display inline
														}}
													>
														<a
															href="#profileMain"
															className={
																activeTab === "profileMain"
																	? "active show"
																	: ""
															}
															data-bs-toggle="tab"
															onClick={() =>
																handleTabClick("profileMain")
															}
														>
															Profile
														</a>
													</li>
													<li
														style={{
															borderBottom:
																activeTab === "accountSettings"
																	? "2px solid red"
																	: "none",
															display: "inline"
														}}
													>
														<a
															href="#accountSettings"
															data-bs-toggle="tab"
															onClick={() =>
																handleTabClick(
																	"accountSettings"
																)
															}
														>
															Account Settings
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-content">
								<div className="tab-pane active show" id="profileMain">
									<div className="card">
										<div className="card-body p-0">
											<div
												className="table-responsive px-5  "
												style={{
													fontFamily: "Poppins, sans-serif"
												}}
											>
												<h3
													className="card-titl  mx-3"
													style={{
														fontFamily: "Poppins, sans-serif",
														color: "gray",
														fontSize: "18px",
														lineHeight: "20px",
														fontWeight: "bold",
														margin: "1rem",
														marginBottom: "2rem"
													}}
												>
													Personal Info
												</h3>
												<table className="table row table-borderless">
													<tbody className="col-lg-12 col-xl-6 p-0 ">
														<tr>
															<td>
																<strong>First Name :</strong>{" "}
																{data.fname}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Location :</strong>{" "}
																{(data.city, data.country)}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Subject :</strong>{" "}
																{data.subject}
															</td>
														</tr>
													</tbody>
													<tbody className="col-lg-12 col-xl-6 p-0 ">
														<tr>
															<td>
																<strong>Last Name :</strong>{" "}
																{data.lname}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Email :</strong>{" "}
																{data.email}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Phone :</strong>{" "}
																{data.phone}
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="border-top"></div>
											<div
												style={{
													display: "flex",
													flexDirection: "column"
												}}
												className="p-5"
											>
												<h3
													className="card-titl"
													style={{
														fontFamily: "Poppins, sans-serif",
														color: "gray",
														fontSize: "18px",
														lineHeight: "20px",
														fontWeight: "bold",
														margin: "1rem",
														marginBottom: "2rem"
													}}
												>
													Statistics
												</h3>
												<div className="">
													<ul className="nav p-0 border-bottom-0 mb-0">
														<li
															style={{
																padding: "1rem",
																height: "5rem",
																width: "8rem",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																borderRadius: "5px",
																backgroundColor: "#fbfbfc"
															}}
															className="border p-3 br-5 bg-light-lightest wpx-100 hpx-70 text-center my-1"
														>
															<span
																style={{
																	fontSize: "1.7rem",
																	marginRight: "2px"
																}}
																className="border-0 mb-0 pb-0 fs-21"
															>
																{scholarship.length}
															</span>
															Matched
														</li>
														<li
															style={{
																padding: "1rem",
																height: "5rem",
																width: "8rem",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																borderRadius: "5px",
																backgroundColor: "#fbfbfc"
															}}
															className="border p-2 br-5 bg-light-lightest wpx-100 hpx-70 text-center mx-2 my-1"
														>
															<span
																style={{
																	fontSize: "1.7rem",
																	marginRight: "2px"
																}}
																className="border-0 mb-0 pb-0 fs-21"
															>
																0
															</span>
															Applied
														</li>
														<li
															style={{
																padding: "1rem",
																height: "5rem",
																width: "8rem",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																borderRadius: "5px",
																backgroundColor: "#fbfbfc"
															}}
															className="border p-2 br-5 bg-light-lightest wpx-100 hpx-70 text-center my-1"
														>
															<span
																style={{
																	fontSize: "1.7rem",
																	marginRight: "2px"
																}}
																className="border-0 mb-0 pb-0 fs-21"
															>
																0
															</span>
															Favorites
														</li>
													</ul>
												</div>
											</div>
											<div className="border-top"></div>
										</div>
									</div>
								</div>

								<div className="tab-pane" id="accountSettings">
									<div className="card">
										<div className="card-body">
											<form className="form-horizontal">
												<div className="mb-4 main-content-label">
													Account
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="userName"
																className="form-label"
															>
																First Name
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control"
																id="userName"
																placeholder="First Name"
																defaultValue={data.fname}
																onChange={handleInputChange(
																	setFirstName
																)}
															/>
														</div>
													</div>
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="userName"
																className="form-label"
															>
																Last Name
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control"
																id="userName"
																placeholder="Last Name"
																defaultValue={data.lname}
																onChange={handleInputChange(
																	setLastName
																)}
															/>
														</div>
													</div>
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div
															onClick={() =>
																handleEditUserInfo()
															}
															className="col-md-12"
														>
															<Link
																style={{
																	backgroundColor: "#EC1D64",
																	color: "#fff"
																}}
																className="btn  my-1 float-end"
																to="#"
															>
																{loading
																	? "Updating..."
																	: "Update"}
															</Link>
														</div>
													</div>
												</div>
											</form>
											<form
												onSubmit={handleEditPassword}
												className="form-horizontal"
											>
												<div className="mb-4 main-content-label">
													Change Password
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="current_password"
																className="form-label"
															>
																Current Password
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="password"
																className="form-control"
																id="current_password"
																name="current_password"
																placeholder="Current Password"
																required
															/>
														</div>
													</div>
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="password"
																className="form-label"
															>
																New Password
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="password"
																className="form-control"
																id="password"
																name="password"
																placeholder="New Password"
																onChange={handleInputChange(
																	setPassword
																)}
																required
															/>
														</div>
													</div>
												</div>

                        <div className="form-group float-end">
                          <div className="row row-sm">
                            <div className="col-md-12">
                              <button
                                className="btn  my-1"
                                style={{
                                  backgroundColor: "#EC1D64",
                                  color: "#fff",
                                }}
                              >
                                Change Password
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* COL-END */}
          </div>
          {/* ROW-1 CLOSED */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
