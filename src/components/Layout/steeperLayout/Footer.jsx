import "./footer.css";
import React from "react";

const Footer = ({ nextStep, prevStep }) => {
	return (
		<div className="app-bottom-container ">
			<div className="progress-widget-container">
				<div className="left-column">
					<p className="progress-title">Find your school today.</p>
					<div className="progress-container">
						<div className="progress-bar-wrapper">
							<div className="progress-bar">
								<div className="filler" style={{ width: "25%" }}></div>
							</div>
						</div>
					</div>
				</div>
				<div className="right-column">
					<button onClick={nextStep} type="button" className="step-button">
						<div className="arrow">
							<div className="up"></div>
						</div>
					</button>
					<button onClick={prevStep} type="button" className="step-button">
						<div className="arrow">
							<div className="down"></div>
						</div>
					</button>
				</div>
			</div>
			<div className="footer-container">
				<p>© 2023 kodoscholarships.com</p>
				<div className="footer-options">
					<a href="/privacy-policy/"  style={{color: "#EC1D64"}}>Privacy Policy</a>
					<a href="/advertising-disclosure/"  style={{color: "#EC1D64"}} >Advertising Disclosures</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
