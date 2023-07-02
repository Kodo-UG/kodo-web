import React from "react";

const Scholarshipcard = ({
	cardTitle,
	text,
	award,
	deadline,
	subscription,
}) => {
	const date = new Date(deadline);
const formattedDate = date.toLocaleDateString();

	return (
		<div class="col-lg-3 col-6 pb-3">
			<div
				className="card card-custom bg-white border-white border-0"
				style={{ height: 400, width: 300 }}
			>
				<div
					className="card-custom-img"
					style={{
						backgroundImage:
							"url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
					}}
				/>
				<div className="card-custom-avatar">
					<img
						className="img-fluid"
						src="https://res.cloudinary.com/itgenius/image/upload/v1688120420/logo_ab67xw.ico"
						alt="Avatar"
					/>
				</div>
				<div className="card-body" style={{ overflowY: "auto" }}>
					<h4 className="card-title">{cardTitle}</h4>
					<p className="card-text">{text}</p>

					<span style={{ padding: 4 }}>
						Award:{" "}
						<span style={{ color: "blue", fontWeight: "bold" }}>
							{award}
						</span>
					</span>

					<span style={{ padding: 4 }}>
						Deadline:{" "}
						<span style={{ color: "blue", fontWeight: "bold" }}>
							{formattedDate}
						</span>
					</span>
				</div>
				<div
					className="card-footer"
					style={{ background: "inherit", borderColor: "inherit" }}
				>
					<a href="/" className="btn btn-primary">
						Upgrade
					</a>

					<button
						style={{
							marginLeft: 4,
							marginRight: 0,
							cursor: subscription ? "pointer" : "not-allowed",
						}}
						onClick={() => {
							if (subscription) {
								// Handle the click action if subscription is true
								// For example, you can add a function here.
								console.log("Link clicked!");
							}
						}}
						className="btn btn-outline-primary"
						 disabled={!subscription}
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};

export default Scholarshipcard;
