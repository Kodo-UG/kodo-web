
import { Link, useHistory } from "react-router-dom";
import CustomLink from "../customlink";
import "./index.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const NavHeader = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");
	const isSm = useMediaQuery("only screen and (max-width : 1000px)");
	const [open, setOpen] = useState(false);
	const smallClass = isSm ? "navbar-nav  ul" : "navbar-nav ml-auto ul";

	const handleReloadPage = () => {
		window.location.reload();
	};

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
      route: "/scholars",
      children: token ? "Dashboard" : "",
    },
  ];

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-light "
      style={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <Link to="/">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
            alt="logo"
            style={{
              width: "180px",
              height: "auto",
              marginLeft: "8rem",
              paddingLeft: "2rem",
              zIndex: 9999999999,
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
				// onClick={() => setOpen(!open)}
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				style={{ zIndex: 99999 }}
				className="collapse navbar-collapse  "
				id="navbarTogglerDemo01"
			>
				<ul
					style={{
						color: "#202F4A",
						width: "60%",
						display: "flex",
						justifyContent: "center"
					}}
					className={smallClass}
				>
					{routeData.map((dta) => (
						<CustomLink
							// onClick={handleReloadPage}
							key={dta.id}
							route={dta.route}
							children={dta.children}
						/>
					))}
				</ul>

        <div
          className="my-2 my-lg-0 bt "
          style={{
            margin: "0px",
            width: "20rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <form className="form-inline">
            {token ? (
              <button
                className="btn btn-lg"
                style={{
                  height: "4rem",
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("token");
                  localStorage.removeItem("userData");
                  history.push("/login");
                }}
              >
                LOGOUT
              </button>
            ) : (
              <button
                className="btn btn-lg mr-2 "
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/login");
                }}
                style={{
                  height: "4rem",
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                }}
              >
                LOGIN
              </button>
            )}

            <button
              className="btn btn-lg"
              style={{
                background: "#EC1D64",
                borderRadius: "0",
                color: "white",
                height: "4rem",
                marginTop: "0px",
                marginBottom: "0px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
              }}
              onClick={(e) => {
                e.preventDefault();
                history.push("/admissions");
              }}
            >
              FIND SCHOLARSHIPS
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
