
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiClient from "../../api/apiClient";
import axios from "axios";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import CustomInput from "../../components/input";
// import LoginComponent from "../Login/LoginComponent ";
import LoginComponent from "../Login/LoginComponent";
import Forgot from "./Forgot";

export default function ForgotPassword() {
	const [email, setEmail] = useState();

	const history = useHistory();
	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleSubmit = async (e) => {
              e.preventDefault()
		try {
			const data = await apiClient.post("/auth/forgot/password", { email });
			if (data.status == "200") {
				displaySuccessMessage(`Password reset instructions sent ${email}`);
			} else {
				displayErrorMessage("Password reset");
			}
		} catch (error) {
     
	displayErrorMessage("Invalid Email or Password");
		}
	};
	return (

		   <section className=" fxt-template-layout1" >
  <div className="container-fluid " style={{display: "flex",}}>
    <div className="col-md-6 col-12 fxt-bg-color b" style={{background: "white"}}>
      <div className="fxt-content">
        <div className="fxt-header">
		<Link href="/" className="fxt-logo">
            <img
              src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
              alt="Logo"
            />
          </Link>
          <div className="fxt-page-switcher">
		  <Link to="/signin" className="switcher-text1 active">
              Log In
            </Link>
            <Link
              to="/login"
              className="switcher-text1"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="fxt-form" >
          <h2 style={{textAlign: "start"}}>Forgot PassWord</h2>
          <p>Request for password reset</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="fxt-transformY-50 fxt-transition-delay-1">
                <input
			 id="email"
			 type="email"
			 className="form-control"
			 placeholder="Email Address"
			 name="email"
			 onChange={handleChange(setEmail)}
                />
                <i className="flaticon-envelope"></i>
              </div>
            </div>
        
            <div className="form-group">
              <div className="fxt-transformY-50 fxt-transition-delay-3">
                <div className="fxt-content-between">
                  <button 
				  type="submit"
				  className="fxt-btn-fill">
                    Reset
                  </button>
                  <Link
                    to="/signin"
                    className="switcher-text2"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
 

    </div>
         <div className="col-md-6 col-12 fxt-none-767 fxt-bg-img " style={{
          backgroundImage: 'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688935613/bg1-l_rvlan9.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover"
         }}></div>
    </div>
    </section>

	);
}
