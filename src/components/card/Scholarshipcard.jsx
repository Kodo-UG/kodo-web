import React from "react";

const Scholarshipcard = () => {
	return (
		<div class="col-md-6 col-lg-4 pb-3">
			<div
				className="card card-custom bg-white border-white border-0"
				style={{ height: 450 }}
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
						src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
						alt="Avatar"
					/>
				</div>
				<div className="card-body" style={{ overflowY: "auto" }}>
					<h4 className="card-title">Card title</h4>
					<p className="card-text">
						You can also set maximum height on and the card will not
						expand, instead a scrollbar in the card body will appear.
					</p>
					<p className="card-text">
						Some example text to show the scrollbar.
					</p>
					<p className="card-text">
						Lorem ipsum dolor sit amet, te vix omittam fastidii, enim
						paulo omnes ea has, illud luptatum no qui. Sed ea qualisque
						urbanitas, purto elit nec te. Possim inermis antiopam ut eum.
						Eos te zril labore laboramus, quem erant nam in. Ut sed
						molestie antiopam. At altera facilisis mel.
					</p>
				</div>
				<div
					className="card-footer"
					style={{ background: "inherit", borderColor: "inherit" }}
				>
					<a href="/" className="btn btn-primary">
						Option
					</a>
					<a href="/" className="btn btn-outline-primary">
						Other option
					</a>
				</div>
			</div>
		</div>
	);
};

export default Scholarshipcard;
