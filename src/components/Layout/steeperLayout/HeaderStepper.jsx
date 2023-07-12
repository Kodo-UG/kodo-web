import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const HeaderStepper = () => {
	return (
		<div>
			  <Link
            className="navigation-container"
            to="/"
          >
            <img
              src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
              alt="Logomark"
            />
          </Link>
			
		</div>
	);
};

export default HeaderStepper;
