import React from "react";

function NewProfile() {
  return (
    <div className="app-content main-content mt-0">
      <div className="side-app">
        {/* CONTAINER */}
        <div className="main-container container-fluid">
          {/* PAGE-HEADER */}
          <div className="page-header">
            <div>
              <h1 className="page-title">Profile</h1>
            </div>
            <div className="ms-auto pageheader-btn">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://www.kodoscholarships.com/dashboard">
                    Dashboard
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Profile
                </li>
              </ol>
            </div>
          </div>
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
                            src="https://www.kodoscholarships.com/assets/images/faces/6.jpg"
                            alt="img"
                            className="m-0 p-1 rounded hrem-6"
                          />
                        </div>
                        <div className="ms-4">
                          <h4>James Tumusiime</h4>
                          <p className="text-muted mb-2">
                            900.crypto@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-xl-6">
                      <div className="d-md-flex flex-wrap justify-content-lg-end">
                        <div className="media m-3">
                          <div className="media-icon bg-primary me-3 mt-1">
                            <i className="fa fa-compass fs-20 text-white"></i>
                          </div>
                          <div className="media-body">
                            <span className="text-muted">Matched</span>
                            <div className="fw-semibold fs-25">4</div>
                          </div>
                        </div>
                        <div className="media m-3">
                          <div className="media-icon bg-info me-3 mt-1">
                            <i className="fa fa-paper-plane fs-20 text-white"></i>
                          </div>
                          <div className="media-body">
                            <span className="text-muted">Applied</span>
                            <div className="fw-semibold fs-25">0</div>
                          </div>
                        </div>
                        <div className="media m-3">
                          <div className="media-icon bg-warning me-3 mt-1">
                            <i className="fa fa-bookmark fs-20 text-white"></i>
                          </div>
                          <div className="media-body">
                            <span className="text-muted">Favorites</span>
                            <div className="fw-semibold fs-25">0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top">
                  <div className="wideget-user-tab">
                    <div className="tab-menu-heading">
                      <div className="tabs-menu1">
                        <ul className="nav">
                          <li>
                            <a
                              href="#profileMain"
                              className="active show"
                              data-bs-toggle="tab"
                            >
                              Profile
                            </a>
                          </li>
                          <li>
                            <a href="#accountSettings" data-bs-toggle="tab">
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
                      <div className="table-responsive p-5">
                        <h3 className="card-title">Personal Info</h3>
                        <table className="table row table-borderless">
                          <tbody className="col-lg-12 col-xl-6 p-0">
                            <tr>
                              <td>
                                <strong>First Name :</strong> James
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Location :</strong> Kampala, Uganda
                              </td>
                            </tr>
                          </tbody>
                          <tbody className="col-lg-12 col-xl-6 p-0 border-top-0">
                            <tr>
                              <td>
                                <strong>Last Name :</strong> Tumusiime{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Email :</strong> 900.crypto@gmail.com
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="border-top"></div>
                      <div className="p-5">
                        <h3 className="card-title">Statistics</h3>
                        <div className="profile-cover__info ms-4 ms-auto p-0">
                          <ul className="nav p-0 border-bottom-0 mb-0">
                            <li className="border p-2 br-5 bg-light-lightest wpx-100 hpx-70 text-center my-1">
                              <span className="border-0 mb-0 pb-0 fs-21">
                                4
                              </span>
                              Matched
                            </li>
                            <li className="border p-2 br-5 bg-light-lightest wpx-100 hpx-70 text-center mx-2 my-1">
                              <span className="border-0 mb-0 pb-0 fs-21">
                                0
                              </span>
                              Applied
                            </li>
                            <li className="border p-2 br-5 bg-light-lightest wpx-100 hpx-70 text-center my-1">
                              <span className="border-0 mb-0 pb-0 fs-21">
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
                      <form method="" action="" className="form-horizontal">
                        <div className="mb-4 main-content-label">Account</div>
                        <div className="form-group ">
                          <div className="row row-sm">
                            <div className="col-md-3">
                              <label htmlFor="userName" className="form-label">
                                First Name
                              </label>
                            </div>
                            <div className="col-md-9">
                              <input
                                type="text"
                                className="form-control"
                                id="userName"
                                placeholder="First Name"
                                value="James"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row row-sm">
                            <div className="col-md-3">
                              <label htmlFor="userName" className="form-label">
                                Last Name
                              </label>
                            </div>
                            <div className="col-md-9">
                              <input
                                type="text"
                                className="form-control"
                                id="userName"
                                placeholder="Last Name"
                                value="Tumusiime"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group ">
                          <div className="row row-sm">
                            <div className="col-md-12">
                              <a
                                className="btn btn-primary my-1 float-end"
                                href="#"
                              >
                                Update
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                      <form
                        method="POST"
                        action="https://www.kodoscholarships.com/change-password"
                        className="form-horizontal"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="bR8Vjf5q43xYNweyrJVA2xlhf9B9qI3yPKAXBPHu"
                        />
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
                              <label htmlFor="password" className="form-label">
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
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group float-end">
                          <div className="row row-sm">
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="btn btn-primary my-1"
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

export default NewProfile;
