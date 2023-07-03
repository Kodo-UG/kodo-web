import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomLink from "../customlink";

const NavHeader = () => {
	const history = useHistory();

	const routeData = [
		{
			id: 1,
			route: "/",
			children: "Home",
		},
		{
			id: 2,
			route: "/aboutus",
			children: "About us",
		},
		{
			id: 3,
			route: "/scholarships",
			children: "Scholarships",
		},
		{
			id: 4,
			route: "/testimonals",
			children: "Testimonals",
		},
		{
			id: 5,
			route: "/blog",
			children: "Blog",
		},
		{
			id: 6,
			route: "/contactus",
			children: "Contact us",
		},
	];
	return (
		<nav class="navbar navbar-expand-lg navbar-light ">
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<Link to="/">
					<div class="logo">
						<img
							src="logo-kodo.png"
							alt="logo"
							style={{ width: "", height: "50px" }}
						/>
					</div>
				</Link>

				<ul
					style={{ marginLeft: 20 }}
					class="navbar-nav mr-auto mt-2 mt-lg-0"
				>
					{routeData.map((dta) => (
						<CustomLink
							key={dta.id}
							route={dta.route}
							children={dta.children}
						/>
					))}
					{/* <li class="nav-item active">
						<Link to="/">
							Home <span class="sr-only">(current)</span>
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/aboutus">About us</Link>
					</li>
					<li class="nav-item">
						<Link to="/scholarships">Scholarship</Link>
					</li>
					<li class="nav-item">
						<Link to="/testimonals">Testimonals</Link>
					</li>
					<li class="nav-item">
						<Link to="/blog">Blog</Link>
					</li>
					<li class="nav-item">
						<Link to="/contactus">Contact us</Link>
					</li> */}
				</ul>
				<form
					class=" my-lg-0 "
					style={{
						display: "flex",
					}}
				>
					{/* <div class="second-header-btn btn-sm" id="loginbtn" style={{marginRight: "1rem"}} >
            <Link to="/login" class="btn btn-sm">
              Login
            </Link>
          </div> */}
					<button
						class="select-option sonic-btn"
						style={{
							padding: "10px 20px",

							border: "none",
							outline: "none",
							background: "#FF7350",
							transition:
								"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
							fontFamily: "Arial, sans-serif",
							fontSize: "16px",
							lineHeight: "1.5",
							color: "#fff",
							cursor: "pointer",
							marginBottom: "4px",
							marginRight: "1rem",
						}}
						onClick={(e) => {
							e.preventDefault();
							history.push("/login");
						}}
					>
						Login
					</button>
					<button
						class="select-option sonic-btn"
						style={{
							padding: "10px 20px",
							background: "#FF7350",
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
						onClick={(e) => {
							e.preventDefault();
							history.push("/admissions");
						}}
					>
						admission open
					</button>
					{/* <div class="second-header-btn btn-sm">
            <Link to="/admissions" class="btn">
              admission open
            </Link>
          </div> */}
				</form>
			</div>
		</nav>

		// <div
		//  style={{
		//    display: "flex",
		//    flexDirection: "row",
		//    justifyContent: "center",
		//    alignContent: "center",
		//  }}
		//  id="header-sticky"
		//  class="menu-area"
		// >
		//  <div class="container">
		//    <div class="second-menu">
		//      <div class="row align-items-center">
		//        <div class="col-xl-3 col-lg-3">
		//          <div class="logo">
		//            <Link style={{ width: 20, height: 20 }} to="/">
		//              <img src="logo-kodo.png" alt="logo" />
		//            </Link>
		//          </div>
		//        </div>
		//        <div class="col-xl-6 col-lg-6">
		//          <div class="main-menu text-right text-xl-right">
		//            <nav id="mobile-menu">
		//              <ul>
		//                <li class="has-sub">
		//                  <Link to="/">Home</Link>
		//                </li>
		//                <li>
		//                  <Link to="/aboutus">About Us</Link>
		//                </li>
		//                <li>
		//                  <Link to="/scholarships">Scholarships</Link>
		//                </li>
		//                <li>
		//                  <Link to="/testimonals">Testimonals</Link>
		//                </li>
		//                <li>
		//                  <Link to="/blog">Blog</Link>
		//                </li>
		//                <li>
		//                  <Link to="/contactus">Contact Us</Link>
		//                </li>
		//              </ul>
		//            </nav>
		//          </div>
		//        </div>
		//        <div
		//          style={{ display: "flex", flexDirection: "row" }}
		//          class="text-right d-none d-lg-block  text-xl-right"
		//        >
		//          <div class="login">
		//            <ul>
		//              <li>
		//                <div class="second-header-btn" id="loginbtn">
		//                  <Link to="/login" class="btn">
		//                    Login
		//                  </Link>
		//                </div>
		//              </li>
		//              <li>
		//                <div class="second-header-btn">
		//                  <Link to="/admissions" class="btn">
		//                    admission open
		//                  </Link>
		//                </div>
		//              </li>
		//            </ul>
		//          </div>
		//        </div>
		//        <div class="col-12">
		//          <div class="mobile-menu"></div>
		//        </div>
		//      </div>
		//    </div>
		//  </div>
		// </div>
	);
};

export default NavHeader;
