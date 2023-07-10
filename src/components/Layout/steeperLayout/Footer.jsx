import React from "react";

const Footer = () => {
	return (
		<div>
			<div className="container-fluid mt-5">
				<div className="card  ">
					<div className="divider "> </div>
					<div className="row" style={{ fontSize: 13 }}>
						<div className="col-md-6 col-sm-6 col-xs-6">
							<div style={{ padding: "1rem" }} className="pull-left">
								<p>
									<i className="fa fa-copyright" /> 2023
									kodoscholarships.com
								</p>
							</div>
						</div>
						<div className="col-md-6 col-sm-6 col-xs-6">
							<div className="pull-right mr-4 d-flex policy">
								<div style={{ padding: "1rem" }}>Privacy Policy</div>
								<div style={{ padding: "1rem" }}>Cookie Policy</div>
								<div style={{ padding: "1rem" }}>Advertising</div>
								<div style={{ padding: "1rem" }}>Disclosure </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
