import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData, updateFormData } from "../../../toolkit/formReducer";
import api from "../../../api/apiClient";
import axios from "axios";
import CustomModal from "../../../components/modal/Modal";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "../../../utils/Toast";
import Input from "../../../components/input/index";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const StepNine = ({ nextStep, prevStep }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field: ${name}, Value: ${value}`);
    // Dispatch an action to update the form data in the Redux store
    dispatch(updateFormData({ field: "email", value: value }));
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field: ${name}, Value: ${value}`);
    // Dispatch an action to update the form data in the Redux store
    dispatch(updateFormData({ field: "password", value: value }));
  };
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field: ${name}, Value: ${value}`);
    // Dispatch an action to update the form data in the Redux store
    dispatch(updateFormData({ field: "phone", value: value }));
  };

  const register = async () => {
    setLoading(true);
    let data = JSON.stringify(formData);

    console.log(data, "DATA IS HERE");

    if (!formData.email || !formData.phone || !formData.password) {
      console.log("no data");
      displayErrorMessage("Please fill in all the required fields");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://165.227.139.53/api/v1/auth/user/signup",
        formData
      );
      console.log(res.data.id);
      localStorage.setItem("userID", res.data.id);

      if (res.data.id) {
        displaySuccessMessage(
          "Registration successful verification email sent to your email"
        );
        nextStep();
      }

      console.log(res, "WEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    } catch (error) {
      console.log(error, "ERROR");
      displayErrorMessage("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  //  const register = async () => {
  //    setLoading(true);
  //    let data = JSON.stringify(formData);

  //    console.log(data, "DATA IS HERE ");
  // if (!data.email && !data.phone && !data.password) {
  //   console.log('no data');
  // }

  //    try {
  //      const res = await axios.post(
  //        "http://165.227.139.53/api/v1/auth/user/signup",
  //        formData
  //      );
  //      console.log(res.data.id);
  //      localStorage.setItem("userID", res.data.id);

  //      if (res.data.id) {
  //        displaySuccessMessage(
  //          "Registration successful verification email sent to your email"
  //        );
  //        nextStep();
  //      }

  //      // setModalOpen(true);

  //      console.log(res, "  WEEEEEEEEEEEEEEEEEEEEEEEEEEE");
  //      // dispatch(clearFormData());
  //    } catch (error) {
  //      console.log(error, "ERROR");
  //      displayErrorMessage("Failed to register");
  //    } finally {
  //      setLoading(false);
  //    }
  //  };
  console.log(modalOpen);
  // const handleRegister = async () => {
  //  const response = await api
  // }

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    console.log(`Field: ${gender}, Value: ${gender}`);
    // Dispatch an action to update the form data in the Redux store
    dispatch(updateFormData({ field: "sex", value: e.target.value }));
  };
  return (
    <div className="app-container">
      <div class="app-wrapper">
        <div
          class="selections-container"
          style={{
            transform: "none",
            transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
          }}
        >
          <h2>Tell us your name.</h2>
        </div>
      </div>
      <form
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "40px",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          {" "}
          <div className="_fieldGroup_1g3ja_1">
            <Input
              onChange={handleEmailChange}
              name="email"
              type="text"
              id="email"
              label="Email Address"
              placeholder="Your email"
            />
          </div>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          {" "}
          <div className="_fieldGroup_1g3ja_1">
            <Input
              onChange={handlePhoneChange}
              name="phone"
              type="text"
              id="phone"
              label="Phone Number "
              placeholder="phone"
            />
          </div>
        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <div className="_fieldGroup_1g3ja_1 ">
            {/* <Input
              onChange={handlePasswordChange}
              name="password"
              type="password"
              id="password"
              label="Password"
              placeholder="password"
            /> */}

            <div
              style={{
                position: "relative",
              }}
            >
              <Input
                onChange={handlePasswordChange}
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                label="Password"
                placeholder="password"
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  bottom: "2%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div
              style={{
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <label style={{
                
                height: "100%",
                  display: "flex",
              alignItems: "center",
              justifyContent: "center",
              }}>Gender</label> */}
              <select
                value={gender}
                onChange={handleGenderChange}
                style={{
                  //                display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",

                  // height: "100%",
                  // marginLeft: "2rem",
                  // border: 0,
                  border: "none",
                  backgroundColor: "#E8F0FE",
                  borderRadius: "4px",
                  padding: "8px",
                  width: "100%",
                  height: "100%",
                  marginTop: "4rem"
                }}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* 
            <div>
              <label>Gender</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleGenderChange}
                  />
                  Female
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="other"
                    checked={gender === "other"}
                    onChange={handleGenderChange}
                  />
                  Other
                </label>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div>
          <div className="_fieldGroup_1g3ja_1">
            <input
              id="confrimPassword"
              className="_textField_fwd9c_1"
              name="confirm-password"
              placeholder="Confirm Password"
              required=""
              data-testid="confirm-password"
              value=""
              style={{
                borderRadius: "10px",
                width: "500px",
                padding: "15px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "box-shadow 0.3s ease-in-out",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.5",
                color: "#333",
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div> */}
      </form>
      <div
        className="d-flex"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <button
          className="select-option sonic-btn"
          onClick={prevStep}
          style={{
            padding: "10px 20px",
            border: "none",
            outline: "none",
            transition:
              "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "4px",
          }}
        >
          Previous
        </button>

        <button
          className="select-option sonic-btn"
          onClick={register}
          style={{
            padding: "10px 20px",
            border: "none",
            outline: "none",
            transition:
              "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "4px",
          }}
        >
          {loading ? "Registering...." : "Register"}
        </button>
      </div>
    </div>
  );
};

export default StepNine;