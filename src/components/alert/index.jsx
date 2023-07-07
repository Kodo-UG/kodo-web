import React from "react";

const CustomAlert = () => {
	return (
		<div style={{ padding: "20px" }} className="content-wrapper">
			<section className="content">
				<div class="alert alert-success" role="alert">
					<h4 class="alert-heading">
						You do not yet have any applications
					</h4>
					<p>
						Continue by selecting a study program. After you have found
						where you want to apply , click "Apply" and your application
						will be automatically created.
					</p>
					<hr />
					<p class="mb-0">kodo scholarship.</p>
				</div>
			</section>

			<button
				style={{
					backgroundColor: "#FF7350",
					fontWeight: "bold",
					color: "white",
					borderRadius: "7px",
					padding: "8px",
					marginLeft: "6.8px",
				}}
			>
				Continue &gt;&gt;
			</button>
		</div>
	);
};

export default CustomAlert;
