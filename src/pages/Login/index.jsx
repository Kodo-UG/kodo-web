import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiClient from "../../api/apiClient";
import axios from "axios";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import Spinner from "../../components/spinner";
import "./custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleLogin = async (e) => {
	e.preventDefault()
    setLoading(true);
    try {
      const data = await axios.post(
        "https://demo.kodoscholarships.com/api/v1/auth/login",
        { email, password }
      );
      if (data.status == "201") {
        localStorage.setItem("userData", JSON.stringify(data.data));
        displaySuccessMessage("Login successful");
        localStorage.setItem("token", data.data.token);
        history.push("/db");
        // console.log(data.data.user.status, "LOGIN DATA");
        localStorage.setItem("status", data.data.user.status);
      } else {
        displayErrorMessage("Login Failed");
      }
    } catch (error) {
      // console.log(error);
      displayErrorMessage("Invalid username or password", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(email,password,"creds")
  return (
    <section className=" fxt-template-layout1">
  <div className="container-fluid " style={{display: "flex",}}>
    <div className="col-md-6 col-12 fxt-bg-color ">
      <div className="fxt-content">
        <div className="fxt-header">
          <Link href="/" className="fxt-logo">
            <img
              src="logo-kodo.png"
              alt="Logo"
            />
          </Link>
          <div className="fxt-page-switcher">
            <a href="#!" className="switcher-text1 active">
              Log In
            </a>
            <Link
              to="/login"
              className="switcher-text1"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="fxt-form" >
          <h2 style={{textAlign: "start"}}>Log In</h2>
          <p>Log in to continue to Kodo</p>
          <form onSubmit={handleLogin}>
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
              <div className="fxt-transformY-50 fxt-transition-delay-2">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required="required"
				  onChange={handleChange(setPassword)}
				  id="password"

                />
                <i className="flaticon-padlock"></i>
              </div>
            </div>
            <div className="form-group">
              <div className="fxt-transformY-50 fxt-transition-delay-3">
                <div className="fxt-content-between">
                  <button 
				  className="fxt-btn-fill">
                    Log in
                  </button>
                  <Link
                    to="/forgot-password"
                    className="switcher-text2"
                  >
                    Forgot Password
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

    // <div className="container-fluid vh-100 " style={{ width: "100vw" }}>
    // 	<div className="row h-100">
    // 		<div className="col-md-6 bg-white d-flex align-items-center justify-content-center">
    // 			<div
    // 				style={{
    // 					display: "flex",
    // 					marginTop: "10px",
    // 					marginBottom: "20px",
    // 					flexDirection: "column",
    // 				}}
    // 			>
    // 				<div
    // 					style={{
    // 						display: "flex",
    // 						// alignItems: "flex-start",
    // 						marginTop: "10px",
    // 						marginBottom: "10px",
    // 						// justifyContent: "center",
    // 						flexDirection: "column",
    // 					}}
    // 				>
    // 					<div
    // 						style={{
    // 							display: "flex",
    // 							alignItems: "center",
    // 							marginTop: "10px",
    // 							marginBottom: "40px",
    // 							justifyContent: "space-between",
    // 							flexDirection: "row",
    // 						}}
    // 					>
    // 						<div>
    // 							<img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png" width={200} alt="logo" />
    // 						</div>
    // 						<div
    // 							style={{
    // 								display: "flex",
    // 								alignItems: "center",
    // 								justifyContent: "space-between",
    // 								flexDirection: "row",
    // 							}}
    // 						>
    // 							<h1
    // 								style={{
    // 									color: "#ec1d64",
    // 									transition:
    // 										"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    // 									fontFamily: "Arial, sans-serif",
    // 									fontSize: "24px",
    // 								}}
    // 							>
    // 								Login | {" "}
    // 							</h1>
    // 							<Link
    // 								to="/admissions"
    // 								style={{
    // 									color: "gray",
    // 									transition:
    // 										"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    // 									fontFamily: "Arial, sans-serif",
    // 									fontSize: "24px",
    // 								}}
    // 							>
    // 								Sign up
    // 							</Link>
    // 						</div>
    // 					</div>
    // 					<h1
    // 						style={{
    // 							fontWeight: "bold",
    // 							fontSize: "24px",
    // 							transition:
    // 								"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    // 							fontFamily: "Arial, sans-serif",
    // 						}}
    // 					>
    // 						Log in
    // 					</h1>
    // 					<h1
    // 						style={{
    // 							transition:
    // 								"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    // 							fontFamily: "Arial, sans-serif",
    // 							fontSize: "16px",
    // 							lineHeight: "1.5",
    // 							color: "gray",
    // 						}}
    // 					>
    // 						Log in to continue to Kodo
    // 					</h1>
    // 				</div>

    // 				<div style={{ marginTop: "20px", marginBottom: "20px" }}>
    // 					<div
    // 						className="form-group"
    // 						style={{ display: "flex", flexDirection: "column" }}
    // 					>
    // 						<label htmlFor="email">Email</label>
    // 						<input
    // 							id="email"
    // 							name="email"
    // 							placeholder="Email"
    // 							onChange={handleChange(setEmail)}
    // 							required=""
    // 							type="text"
    // 							style={{
    // 								borderRadius: "10px",
    // 								width: "500px",
    // 								padding: "10px",
    // 								border: "1px solid #ccc",
    // 								outline: "none",
    // 								transition: "box-shadow 0.3s ease-in-out",
    // 								boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    // 								fontFamily: "Arial, sans-serif",
    // 								fontSize: "16px",
    // 								lineHeight: "1.5",
    // 								color: "#333",
    // 							}}
    // 							// onChange={handleCountryChange} // Add onChange event handler
    // 						/>
    // 					</div>
    // 				</div>
    // 				<div style={{ marginBottom: "10px" }}>
    // 					<div
    // 						className="form-group"
    // 						style={{ display: "flex", flexDirection: "column" }}
    // 					>
    // 						<label htmlFor="password">Password</label>
    // 						<input
    // 							id="password"
    // 							name="password"
    // 							placeholder="Password"
    // 							required=""
    // 							type="password"
    // 							style={{
    // 								borderRadius: "10px",
    // 								width: "500px",
    // 								padding: "10px",
    // 								border: "1px solid #ccc",
    // 								outline: "none",
    // 								transition: "box-shadow 0.3s ease-in-out",
    // 								boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    // 								fontFamily: "Arial, sans-serif",
    // 								fontSize: "16px",
    // 								lineHeight: "1.5",
    // 								color: "#333",
    // 							}}
    // 							onChange={handleChange(setPassword)}
    // 						/>
    // 					</div>
    // 				</div>
    // 				<div
    // 					style={{
    // 						display: "flex",
    // 						alignItems: "flex-start",
    // 						marginTop: "20px",
    // 						marginBottom: "15px",
    // 						justifyContent: "space-between",
    // 						flexDirection: "row",
    // 					}}
    // 				>
    // 					<div>
    // 						{loading ? (
    // 							<Spinner />
    // 						) : (
    // 							<button
    // 								onClick={handleLogin}
    // 								class="select-option sonic-btn"
    // 								style={{
    // 									padding: "10px 20px",
    // 									border: "none",
    // 									outline: "none",
    // 									transition:
    // 										"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    // 									fontFamily: "Arial, sans-serif",
    // 									fontSize: "16px",
    // 									lineHeight: "1.5",
    // 									color: "#fff",
    // 									cursor: "pointer",
    // 									marginBottom: "4px",
    // 								}}
    // 							>
    // 								Login
    // 							</button>
    // 						)}
    // 					</div>
    // 					<div>
    // 						<Link
    // 							to="/forgot/password"
    // 							style={{
    // 								padding: "10px 20px",
    // 								border: "none",
    // 								outline: "none",
    // 								transition:
    // 									"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    // 								fontFamily: "Arial, sans-serif",
    // 								fontSize: "16px",
    // 								lineHeight: "1.5",
    // 								color: "gray",
    // 								cursor: "pointer",
    // 							}}
    // 						>
    // 							Forgot Password
    // 						</Link>
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>

    // 		<div className="col-md-6 d-flex align-items-center justify-content-center ">
    // 			<div className="image-container " style={{width: "100%", height: "100%"}}>
    // 				<img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688935613/bg1-l_rvlan9.jpg" alt=""  style={{width: "100%", height: "100%", objectFit: "cover"}}/>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
}
