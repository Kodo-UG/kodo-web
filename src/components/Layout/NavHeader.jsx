import { Link, useHistory } from "react-router-dom";
import CustomLink from "../customlink";
import "./index.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { HiMenuAlt1 } from "react-icons/hi";
import { clearScholarships } from "../../toolkit/scholarshipReducer";
import { useDispatch } from "react-redux";

const NavHeader = ({ open, setOpen }) => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const isSm = useMediaQuery("only screen and (max-width : 1000px)");

  const smallClass = isSm ? "navbar-nav  ul" : "navbar-nav ml-auto ul";
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (token) {
      history.push("/scholars");
    } else {
      history.push("/admissions");
    }
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
      children: "Blogs",
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
        boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: isSm ? "100%" : "",
          display: isSm ? "flex" : "",
          alignItems: "center",
          justifyContent: "space-between",
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
              }}
            />
          </div>
        </Link>

        {isSm && (
          <button type="button" onClick={() => setOpen(!open)}>
            <HiMenuAlt1
              style={{
                color: "red",
                width: "3rem",
                height: "2rem",
                fontWeight: "bolder",
                marginTop: "1rem",
              }}
            />
          </button>
        )}
      </div>

      {open ? (
        <div style={{ zIndex: 99999 }} onClick={() => setOpen(false)}>
          <ul
            style={{
              color: "#202F4A",
              width: "60%",
              display: "flex",
              justifyContent: "center",
            }}
            className={smallClass}
          >
            {routeData.map((dta) => (
              <div onClick={() => setOpen(false)}>
                <CustomLink
                  key={dta.id}
                  route={dta.route}
                  children={dta.children}
                />
              </div>
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
                  logout
                </button>
              ) : (
                <button
                  className="btn btn-lg mr-2 "
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/login");
                  }}
                  style={{
                    borderRadius: 20,
                    height: "3rem",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  login
                </button>
              )}

              <button
                className="btn btn-lg"
                style={{
                  background: "#EC1D64",
                  borderRadius: 20,
                  color: "white",
                  height: "3rem",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                }}
                onClick={handleClick}
              >
                Find Scholarships
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div style={{ zIndex: 99999 }} className="collapse navbar-collapse  ">
          <ul
            style={{
              color: "#202F4A",
              width: "60%",
              display: "flex",
              justifyContent: "center",
            }}
            className={smallClass}
          >
            {routeData.map((dta) => (
              <CustomLink
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
                    borderRadius: 20,
                    height: "3rem",
                    marginRight: "5px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    localStorage.removeItem("userData");
                    dispatch(clearScholarships());
                    history.push("/login");
                  }}
                >
                  logout
                </button>
              ) : (
                <button
                  className="btn btn-lg mr-2 "
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/login");
                  }}
                  style={{
                    borderRadius: 20,
                    height: "3rem",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  login
                </button>
              )}

              <button
                className="btn btn-lg"
                style={{
                  background: "#EC1D64",
                  borderRadius: 20,
                  color: "white",
                  height: "3rem",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                }}
                onClick={handleClick}
              >
                Find Scholarships
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
