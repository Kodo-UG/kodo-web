import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
				<div class="logo">
					<Link style={{ width: 20, height: 20 }} to="/">
						<img src="logo-kodo.png" alt="logo" />
					</Link>
				</div>
				<ul
					style={{ marginLeft: 20 }}
					class="navbar-nav mr-auto mt-2 mt-lg-0"
				>
					<li class="nav-item active">
						<a class="nav-link" href="/">
						<Link to="/">Home <span class="sr-only">(current)</span></Link>
							
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/">
						<Link to="/aboutus">About us</Link>
							
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="/">
						<Link to="/scholarships">Scholarship</Link>
							
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="/">
						<Link to="/testimonals">Testimonals</Link>
							
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="/">
						<Link to="/blog">Blog</Link>
							
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="/">
						<Link to="/contactus">Contact us</Link>
							
						</a>
					</li>
				</ul>
				<form class=" my-2 my-lg-0 " style={{
					display: "flex",

				}} >
					<div class="second-header-btn" id="loginbtn" style={{marginRight: "1rem"}} >
						<Link to="/login" class="btn">
							Login
						</Link>
					</div>
					<div class="second-header-btn">
						<Link to="/admissions" class="btn">
							admission open
						</Link>
					</div>
				</form>
			</div>
		</nav>

		// <div
		// 	style={{
		// 		display: "flex",
		// 		flexDirection: "row",
		// 		justifyContent: "center",
		// 		alignContent: "center",
		// 	}}
		// 	id="header-sticky"
		// 	class="menu-area"
		// >
		// 	<div class="container">
		// 		<div class="second-menu">
		// 			<div class="row align-items-center">
		// 				<div class="col-xl-3 col-lg-3">
		// 					<div class="logo">
		// 						<Link style={{ width: 20, height: 20 }} to="/">
		// 							<img src="logo-kodo.png" alt="logo" />
		// 						</Link>
		// 					</div>
		// 				</div>
		// 				<div class="col-xl-6 col-lg-6">
		// 					<div class="main-menu text-right text-xl-right">
		// 						<nav id="mobile-menu">
		// 							<ul>
		// 								<li class="has-sub">
		// 									<Link to="/">Home</Link>
		// 								</li>
		// 								<li>
		// 									<Link to="/aboutus">About Us</Link>
		// 								</li>
		// 								<li>
		// 									<Link to="/scholarships">Scholarships</Link>
		// 								</li>
		// 								<li>
		// 									<Link to="/testimonals">Testimonals</Link>
		// 								</li>
		// 								<li>
		// 									<Link to="/blog">Blog</Link>
		// 								</li>
		// 								<li>
		// 									<Link to="/contactus">Contact Us</Link>
		// 								</li>
		// 							</ul>
		// 						</nav>
		// 					</div>
		// 				</div>
		// 				<div
		// 					style={{ display: "flex", flexDirection: "row" }}
		// 					class="text-right d-none d-lg-block  text-xl-right"
		// 				>
		// 					<div class="login">
		// 						<ul>
		// 							<li>
		// 								<div class="second-header-btn" id="loginbtn">
		// 									<Link to="/login" class="btn">
		// 										Login
		// 									</Link>
		// 								</div>
		// 							</li>
		// 							<li>
		// 								<div class="second-header-btn">
		// 									<Link to="/admissions" class="btn">
		// 										admission open
		// 									</Link>
		// 								</div>
		// 							</li>
		// 						</ul>
		// 					</div>
		// 				</div>
		// 				<div class="col-12">
		// 					<div class="mobile-menu"></div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default NavHeader;
