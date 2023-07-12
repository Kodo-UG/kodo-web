import "./footer.css";
import React from "react";

const Footer = () => {
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
          <button type="button" className="step-button" disabled="">
            <div className="arrow" 	>
              <div className="up"></div>
            </div>
          </button>
          <button type="button" className="step-button" disabled="">
            <div className="arrow">
              <div className="down"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="footer-container">
        <p>© 2023 kodoscholarships.com</p>
        <div className="footer-options">
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/advertising-disclosure/">Advertising Disclosures</a>
        </div>
      </div>
    </div>

    // <div>
    // 	<div className="container-fluid mt-5">
    // 		<div className="card  ">
    // 			<div className="divider "> </div>
    // 			<div className="row" style={{ fontSize: 13 }}>
    // 				<div className="col-md-6 col-sm-6 col-xs-6">
    // 					<div style={{ padding: "1rem" }} className="pull-left">
    // 						<p>
    // 							<i className="fa fa-copyright" /> 2023
    // 							kodoscholarships.com
    // 						</p>
    // 					</div>
    // 				</div>
    // 				<div className="col-md-6 col-sm-6 col-xs-6">
    // 					<div className="pull-right mr-4 d-flex policy">
    // 						<div style={{ padding: "1rem" }}>Privacy Policy</div>
    // 						<div style={{ padding: "1rem" }}>Cookie Policy</div>
    // 						<div style={{ padding: "1rem" }}>Advertising</div>
    // 						<div style={{ padding: "1rem" }}>Disclosure </div>
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
};

export default Footer;
