import React from "react";
import Body from "../../../components/Layout/Body";
import { BiSignal1 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";

const StepperFour = ({ nextStep, prevStep, setFormData }) => {
	const dispatch = useDispatch();
	const list = [
		{
			id: 1,
			text: "High School",
		},
		{
			id: 2,
			text: "GED",
		},
		{
			id: 3,
			text: "Associate",
		},
		{
			id: 4,
			text: "Bachelor's",
		},
		{
			id: 5,
			text: "Master's",
		},
		{
			id: 6,
			text: "Doctorate",
		},
	];

	const handleClick = (text) => {
		dispatch(updateFormData({ field: "educationlevel", value: text }));
	};

	return (
		<Body>
			<div
				id="voyager"
				data-basename="/voyager/experience"
				className="flex-1 relative"
			>
				<section id="voyager-blocks">
					<section>
						<section>
							<div
								data-testid="progress-bar"
								className="_progressBar_63yfq_1"
							>
								<div
									className="_progress_63yfq_1"
									style={{ width: "10%" }}
								></div>
							</div>
							<div className="_notAnimated_pmptr_10">
								<span className="_headingContainer_1fpvz_1" style={{
									padding: '10px',
									
								}}>
									<p>
										First things first, catch us up on your education
										journey so far.
									</p>
									<h2 className="_soloHeading_1fpvz_8">
										What’s the highest level of education you’ve
										completed?
									</h2>
								</span>
								<div>
									<span className="_conditional_gamud_1">
										<div>
											<div
												data-testid="callout-field"
												className="_callout_1qfey_1"
											>
												<b>
													We have hundreds of schools to choose
													from.
												</b>
												<p>
													Tell us a little about yourself, and
													we'll find the BEST one for you.
												</p>
											</div>
										</div>
									</span>
								</div>

								<div
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(3, 1fr)",
										gap: "2rem",
										margin: "30px",
									}}
								>
									{list.map((item) => (
										<div
											key={item.id}
											style={{
												background: "white",
												borderRadius: 20,
												maxWidth: "10rem",
												width: "10rem",
												height: "10rem",
												boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "center",
												marginLeft: "20px",
												cursor: "pointer",
												transition:
													"background-color 0.3s ease-in-out",
											}}
											onClick={() => handleClick(item.text)}
										>
											<div
												style={{
													borderRadius: "50%",
													background: "#E6E9ED",
													width: "2.5rem",
													height: "2.5rem",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<BiSignal1
													style={{
														color: "red",
														width: "6rem",
														height: "4rem",
														marginTop: "-12px",
														marginLeft: "15px",
													}}
												/>
											</div>

											<div style={{ marginTop: "1rem" }}>
												<h5>{item.text}</h5>
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
					</section>
				</section>
				<div
					className="d-flex"
					style={{ display: "flex", justifyContent: "space-evenly" }}
				>
					<button
						className="select-option sonic-btn"
						style={{
							padding: "10px 20px",
							border: "none",
							outline: "none",
							transition:
								"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
							fontFamily: "Arial, sans-serif",
							fontSize: "16px",
							lineHeight: "1.5",
							color: "#fff",
							cursor: "pointer",
							marginBottom: "4px",
						}}
						onClick={prevStep}
					>
						Previous
					</button>
					<button
						className="select-option sonic-btn"
						style={{
							padding: "10px 20px",
							border: "none",
							outline: "none",
							transition:
								"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
							fontFamily: "Arial, sans-serif",
							fontSize: "16px",
							lineHeight: "1.5",
							color: "#fff",
							cursor: "pointer",
							marginBottom: "4px",
						}}
						onClick={nextStep}
					>
						Next
					</button>
				</div>
			</div>
		</Body>
	);
};

export default StepperFour;
