import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateFormData } from "../../toolkit/formReducer";

const Login = () => {
	const dispatch = useDispatch();

	const object = [
		{
			id: 1,
			title: "Scholarships",
			text: "We’ve helped students win more than $10 million dollars in scholarships.",
			link: "/signin",
		},
		{
			id: 2,
			title: "Jobs",
			text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
			link: "https://www.kodoscholarships.com/steps/program",
		},
	];

	const handleClick = (appType) => {
		dispatch(updateFormData({ field: "appType", value: appType }));
	};

	return (
		<div class="container">
			<div class="row m-5">
				<div class="col-lg-12 text-center">
					<h4
						style={{ marginBottom: "60px", fontWeight: "bold" }}
						class="welcome-title"
					>
						Welcome Back
					</h4>
				</div>

				<div class="row " >
					{object.map((obj) => (
						<div
							onClick={() => handleClick(obj.title)}
							key={obj.id}
							class="col-lg-6"
							style={{ cursor: "pointer" }}
						>
							<div class="card custom-card">
								<div
									key={obj.id}
									class="card-header d-flex align-items-center justify-content-center"
								>
									<img
										src="https://www.kodoscholarships.com/logo.png"
										style={{ width: "95px" }}
										alt="Logo"
										class="logo"
									/>
									<span
										class="card-title"
										style={{ fontSize: "18px", marginBottom: "-4px" }}
									>
										{obj.title}
									</span>
								</div>
								<div class="card-body">
									<p class="card-text text-center"> {obj.text} </p>
									<Link
										to={`${obj.link}`}
										class="btn ss-btn w-100"
										id="button1"
										style={{
											height: 45,
											backgroundColor: "#f27251",
											color: "#fff",
											fontWeight: "bold",
										}}
									>
										Login
									</Link>
								</div>
							</div>
						</div>
					))}

					{/* <div class="col-lg-6">
                        <div class="card custom-card">
                            <div class="card-header d-flex align-items-center justify-content-center">
                                <img src="https://www.kodoscholarships.com/logo.png" style={{ width: '95px' }} alt="Logo" class="logo" />
                                <span class="card-title" style={{ fontSize: '18px', marginBottom: '-4px' }}>Jobs</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text text-center">Are you looking for a remote Job, find Life Changing Jobs Now !.</p>
                                <a href="https://www.kodoscholarships.com/steps/program" class="btn ss-btn w-100" id="button2">Sign Up</a>
                            </div>
                        </div>
                    </div> */}
				</div>
			</div>
		</div>
	);
};

export default Login;
