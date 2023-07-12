import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const HeaderStepper = () => {
	return (
		<div>
			  <a
            className="navigation-container"
            href="#"
          >
            <img
              src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
              alt="Logomark"
            />
          </a>
			{/* <div className="container">
				<nav
					// style={{ backgroundColor: "red" }}
					className="navbar  navbar-light bg-light"
				>
					<Link className="navbar-brand" to="#">
						<img
							style={{ height: "2.4rem" }}
							src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
							alt=""
						/>
					</Link>
				</nav>
			</div> */}
		</div>
	);
};

export default HeaderStepper;
