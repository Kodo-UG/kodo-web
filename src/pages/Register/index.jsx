import React, { useEffect } from "react";

// import "./findScholarship.css";
import StepperCard from "./StepperCard";

const FindScholarship = () => {
  const object = [
    {
      id: 1,
      title: "Scholarships",
      text: "We’ve helped students win more than $10 million dollars in scholarships.",
      link: "/stepper",
      Button: "Sign Up",
    },
    {
      id: 2,
      title: "Jobs",
      text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
      link: "https://www.kodoscholarships.com/steps/program",
      Button: "Sign Up",
    },
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");

    if (action) {
      changeButtons(action);
    }
  }, []);

  const changeButtons = (action) => {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    button1.textContent = "Sign Up";
    button1.href = "https://www.kodoscholarships.com/search-programs";
    button2.textContent = "Sign Up";
    button2.href = "https://www.kodoscholarships.com/steps/program";
  };

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StepperCard list={object} />
    </div>
  );
};

export default FindScholarship;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { updateFormData } from "../../toolkit/formReducer";
// import "./index.css";

// const FindScholarship = () => {
//  const dispatch = useDispatch();

//  const object = [
//    {
//      id: 1,
//      title: "Scholarships",
//      text: "We’ve helped students win more than $10 million dollars in scholarships.",
//      link: "/stepper"
//    },
//    {
//      id: 2,
//      title: "Jobs",
//      text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
//      link: "https://www.kodoscholarships.com/steps/program"
//    }
//  ];

//  const handleClick = (appType) => {
//    dispatch(updateFormData({ field: "appType", value: appType }));
//  };

//  return (
//    <div class="container bg-primary">
//      <div class="row m-5">
//        <div class="col-lg-12 text-center">
//          <h4 style={{ marginBottom: "60px" }} class="welcome-title">
//            Welcome Back
//          </h4>
//        </div>

//        <div class="row">
//          {object.map((obj) => (
//            <div
//              onClick={() => handleClick(obj.title)}
//              key={obj.id}
//              class="col-lg-6 admissions"
//              style={{
//                cursor: "pointer",
//                height: "16rem",
//                maxHeight: "40rem"
//              }}
//            >
//              <div
//                // style={{ backgroundColor: "red", width: "29rem" }}
//                class="card custom-card"
//              >
//                <div
//                  style={{
//                    justifyContent: "center",
//                    // display: "flex",
//                    // alignItems: "center",
//                    margin: "auto",
//                    // backgroundColor: "red",
//                    width: "32rem"
//                  }}
//                  key={obj.id}
//                  class="card-header d-flex align-items-center justify-content-center"
//                >
//                  <img
//                    src="https://www.kodoscholarships.com/logo.png"
//                    style={{
//                      width: "7rem",
//                      marginLeft: "7rem",
//                      height: "2rem"
//                    }}
//                    alt="Logo"
//                    class="logo"
//                  />
//                  <span
//                    class="card-title text"
//                    style={{
//                      fontSize: "16px",
//                      marginBottom: "-4px",
//                      marginRight: "10rem"
//                    }}
//                  >
//                    {obj.title}
//                  </span>
//                </div>
//                <div class="card-body">
//                  <p
//                    class="card-text text-center"
//                    style={{ fontSize: "14px" }}
//                  >
//                    {" "}
//                    {obj.text}{" "}
//                  </p>
//                  <Link
//                    to={`${obj.link}`}
//                    class="btn ss-btn w-100"
//                    id="button1"
//                    style={{
//                      height: 45,
//                      backgroundColor: "#ec1d64",
//                      color: "#fff",
//                      fontWeight: "bold"
//                    }}
//                  >
//                    Sign Up
//                  </Link>
//                </div>
//              </div>
//            </div>
//          ))}
//        </div>
//      </div>
//    </div>
//  );
// };

// export default FindScholarship;