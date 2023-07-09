// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import CustomLink from "../customlink";

// const NavHeader = () => {
//   const history = useHistory();

//   const token = localStorage.getItem("token");

//   const routeData = [
//     {
//       id: 1,
//       route: "/",
//       children: "Home",
//     },
//     {
//       id: 2,
//       route: "/aboutus",
//       children: "About us",
//     },
//     {
//       id: 3,
//       route: "/scholarships",
//       children: "Scholarships",
//     },
//     {
//       id: 4,
//       route: "/testimonals",
//       children: "Testimonals",
//     },
//     {
//       id: 5,
//       route: "/blog",
//       children: "Blog",
//     },
//     {
//       id: 6,
//       route: "/contactus",
//       children: "Contact us",
//     },
//     {
//       id: 7,
//       route: "/db",
//       children: "Dashboard",
//     },
//   ];
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light justify-content-between" >
//       <button
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarTogglerDemo01"
//         aria-controls="navbarTogglerDemo01"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div
//         class="collapse navbar-collapse"
//         id="navbarTogglerDemo01"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <Link to="/">
//           <div class="logo">
//             <img
//               src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
//               alt="logo"
//               style={{ width: "", height: "35px", marginLeft: "3rem" }}
//             />
//           </div>
//         </Link>
//         <ul style={{color: "#2C3661", fontWeight: "600", lineHeight: "1.5", opacity: 0.8}} class="navbar-nav  mt-2 mt-lg-0">
//           {routeData.map((dta) => (
//             <CustomLink
//               key={dta.id}
//               route={dta.route}
//               children={dta.children}
//             />
//           ))}
//         </ul>
//         <form
//           class=" my-lg-0 "
//           style={{
//             display: "flex",
//             height: "4.5rem",
//           }}
//         >
//           {token ? (
//             <button
//               class="select-option sonic-btn"
//               style={{
//                 padding: "10px 20px",
//                 border: "none",
//                 outline: "none",
//                 background: "#ec1d64",
//                 transition:
//                   "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
//                 fontFamily: "Arial, sans-serif",
//                 fontSize: "16px",
//                 lineHeight: "1.5",
//                 color: "#fff",
//                 cursor: "pointer",
//                 marginBottom: "4px",
//                 marginRight: "1rem",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 localStorage.removeItem("token");
//                 history.push("/login");
//               }}
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               className="btn  btn-lg"
//               style={{
// 								padding: "1rem",
// 								margin: "0.2rem"
//               }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 history.push("/login");
//               }}
//             >
//               Login
//             </button>
//           )}
//           <button
//                className="btn  btn-lg"
//               style={{

// 								margin: "0.2rem",

// 								background: "#EC1D64",
// 								borderRadius: "0",
// 								color: "white",
// 								marginRight: "2rem",
//               }}
//             onClick={(e) => {
//               e.preventDefault();
//               history.push("/admissions");
//             }}
//           >
//             FIND SCHOLARSHIP
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// };

// export default NavHeader;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomLink from "../customlink";

const NavHeader = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");

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
		{
			id: 7,
			route: "/db",
			children: "Dashboard",
		},
	];

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light"
			style={{
				boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
				background: "#FFFFFF",
				height: "6rem",
			}}
		>
			<Link to="/">
				<div className="logo">
					<img
						src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
						alt="logo"
						style={{
							width: "",
							height: "35px",
							marginLeft: "3rem",
						}}
					/>
				</div>
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				<ul className="navbar-nav ml-auto">
					{routeData.map((dta) => (
						<CustomLink
							key={dta.id}
							route={dta.route}
							children={dta.children}
						/>
					))}
				</ul>

				<div className="my-2 my-lg-0" style={{ marginLeft: "2rem" }}>
					<form className="form-inline">
						{token ? (
							<button
								className="btn btn-lg"
								style={{
									background: "#EC1D64",
									borderRadius: "0",
									color: "white",
									marginRight: "0.1223rem",
								}}
								onClick={(e) => {
									e.preventDefault();
									localStorage.removeItem("token");
									history.push("/login");
								}}
							>
								Logout
							</button>
						) : (
							<button
								className="btn btn-lg mr-2"
								onClick={(e) => {
									e.preventDefault();
									history.push("/login");
								}}
							>
								Login
							</button>
						)}

						<button
							className="btn btn-lg"
							style={{
								background: "#EC1D64",
								borderRadius: "0",
								color: "white",
							}}
							onClick={(e) => {
								e.preventDefault();
								history.push("/admissions");
							}}
						>
							FIND SCHOLARSHIP
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default NavHeader;
