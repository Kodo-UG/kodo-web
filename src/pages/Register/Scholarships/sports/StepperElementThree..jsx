import React, { useState, useMemo } from "react";
import "../stepperElement.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { countries } from "../../../../constants/countries";
import { Link } from "react-router-dom";
import { displayErrorMessage } from "../../../../utils/Toast";
import * as Yup from "yup";
import {
	selectSportsData,
	updateSportsData
} from "../../../../toolkit/sportsReducer";
import axios from "axios";
import { BASE_URL } from "../../../../constants/api";

const validationSchema = Yup.object().shape({
	country: Yup.string().required("Country is required"),
	city: Yup.string().required("City is required")
});

function StepperElementThree() {
	const sportRegistration = useSelector(selectSportsData);
	console.log("Sports Registration Data:", sportRegistration);

	const dispatch = useDispatch();
	const formData = useSelector((state) => state.formData);
	const history = useHistory();
	const [country, setCountry] = useState("");
	const [preferedCountry, setPreferedCountry] = useState("");
	const [data, setData] = useState([]);
	const [sportcategory, setSportCategory] = useState("");

	const fetchSports = async () => {
		try {
			const res = await axios.get(`${BASE_URL}/admin/sports/categories`);
			setData(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	// console.log(data, "====");
	useMemo(() => {
		fetchSports();
	}, []);

	const handleCountryChange = (e) => {
		setCountry(e.target.value);
		dispatch(updateSportsData({ field: "country", value: e.target.value }));
	};

	const handleSportCatChange = (e) => {
		setSportCategory(e.target.value);
		dispatch(
			updateSportsData({ field: "sportcategory", value: e.target.value })
		);
	};

	const handlePreferedCountryChange = (e) => {
		setPreferedCountry(e.target.value);
		dispatch(
			updateSportsData({ field: "preferedCountry", value: e.target.value })
		);
	};

	const handleCityChange = (e) => {
		const { name, value } = e.target;

		dispatch(updateSportsData({ field: "city", value: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await validationSchema.validate(formData, { abortEarly: false });

			history.push("/sportsfinal");
		} catch (validationErrors) {
			const errorMessages = validationErrors.inner.map(
				(error) => error.message
			);
			displayErrorMessage(errorMessages.join("\n"));
		}
	};

	return (
		<main
			role="main"
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				backgroundColor: "gray-50"
			}}
		>
			<header
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					paddingTop: "4px",
					backgroundColor: "white"
				}}
			>
				<Link to="/">
					<style type="text/css">
						{`svg.icon-component.icon-component--logo-horizontal:hover {
                    fill: var(--secondary-700);
                }`}
					</style>
					<img
						className="icon-component icon-component--logo-horizontal"
						src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
						width="232"
						height="36"
						fill="var(--secondary-600)"
						role="img"
						viewBox="0 0 232 37"
						alt=""
					/>
				</Link>
			</header>
			<div
				id="voyager"
				data-basename="/voyager/experience"
				className="flex-1 relative"
			>
				<section id="voyager-blocks">
					<section>
						<section style={{ padding: "3rem" }} className="">
							<div
								data-testid="progress-bar"
								className="_progressBar_63yfq_1"
							>
								<div
									className="_progress_63yfq_1"
									style={{ width: "50%" }}
								></div>
							</div>
							<Link to="/route1">
								<button
									data-testid="button-previous"
									type="button"
									className="_buttonPrevious_pmptr_34"
								>
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 320 512"
										className="_buttonChevron_pmptr_37"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
									</svg>
									<span className="_buttonText_pmptr_41">Back</span>
								</button>
							</Link>
							<div className="_notAnimated_pmptr_10">
								<span className="_headingContainer_1fpvz_1">
									<h2 className="_soloHeading_1fpvz_8">
										Where do you currently live?
									</h2>
								</span>
								<form onSubmit={handleSubmit}>
									<div>
										<div className="_fieldGroup_1g3ja_1">
											<select
												className="_textField_fwd9c_1"
												value={country}
												onChange={handleCountryChange}
												required
											>
												<option value="">Select country</option>
												{countries.map((country) => (
													<option
														key={country.id}
														value={country.name}
													>
														{country.name}
													</option>
												))}
											</select>
										</div>
									</div>

									<div>
										<div className="_fieldGroup_1g3ja_1">
											<input
												className="_textField_fwd9c_1"
												onChange={handleCityChange}
												name="city"
												type="text"
												id="city"
												label="city"
												placeholder="City"
												required
											/>
										</div>
									</div>

									<div>
										<div className="_fieldGroup_1g3ja_1">
											<select
												className="_textField_fwd9c_1"
												value={sportcategory}
												onChange={handleSportCatChange}
												required
											>
												<option value="">
													Select sport category
												</option>
												{data.map((sp) => (
													<option key={sp.id} value={sp.name}>
														{sp.name}
													</option>
												))}
											</select>
										</div>
									</div>

									<div>
										<div className="_fieldGroup_1g3ja_1">
											<select
												className="_textField_fwd9c_1"
												value={preferedCountry}
												onChange={handlePreferedCountryChange}
												required
											>
												<option value="">
													Where do you want to study from?
												</option>
												{countries.map((country) => (
													<option
														key={country.id}
														value={country.name}
													>
														{country.name}
													</option>
												))}
											</select>
										</div>
									</div>

									<div className="_pageActions_pmptr_26">
										<button
											type="submit"
											className="_buttonContinue_pmptr_46 _button_pmptr_30"
											data-testid="continue"
										>
											<span>Continue</span>
											<svg
												width="26"
												height="16"
												viewBox="0 0 26 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M16.6774 0.468629C17.3023 -0.15621 18.3153 -0.15621 18.9402 0.468629L25.3402 6.86863C25.965 7.49347 25.965 8.50653 25.3402 9.13137L18.9402 15.5314C18.3153 16.1562 17.3023 16.1562 16.6774 15.5314C16.0526 14.9065 16.0526 13.8935 16.6774 13.2686L20.346 9.6H1.80879C0.925131 9.6 0.208786 8.88366 0.208786 8C0.208786 7.11634 0.925131 6.4 1.80879 6.4H20.346L16.6774 2.73137C16.0526 2.10653 16.0526 1.09347 16.6774 0.468629Z"
													fill="white"
												></path>
											</svg>
										</button>
									</div>
								</form>
								<div className="_pageActions_pmptr_26"></div>
								<p
									style={{ color: "black" }}
									className="_disclaimer_icov9_1"
								>
									<svg
										width="18"
										height="20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M3.024 8.8V6.4a6 6 0 0 1 12 0v2.4a2.4 2.4 0 0 1 2.4 2.4v6a2.4 2.4 0 0 1-2.4 2.4h-12a2.4 2.4 0 0 1-2.4-2.4v-6a2.4 2.4 0 0 1 2.4-2.4Zm9.6-2.4v2.4h-7.2V6.4a3.6 3.6 0 0 1 7.2 0Z"
											fill="#e22944"
										></path>
									</svg>
									We safeguard your information with 256-bit
									encryption, the same method employed by most banks
									and one of the most secure encryption solutions
									available.
								</p>
							</div>
						</section>
					</section>
				</section>
			</div>
			<footer className="flex justify-center fixed-bottom items-center bg-primary-900 mt-4 py-5">
				<div className="flex flex-col items-center justify-center md:flex-row flex-wrap">
					<Link to="/">
						<img
							className="icon-component icon-component--logo-stacked-horizontal"
							style={{ color: "#fff" }}
							src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
							width="120px"
							height="120px"
							fill="#fff"
							role="img"
							viewBox="0 0 350 105"
							alt=""
						/>
					</Link>
					<div className="py-2 divide-x px-4 flex flex-wrap justify-center">
						<Link
							className="px-2 text-xs text-white font-bold hover:text-white"
							to="#"
							target="_blank"
						>
							Privacy Policy
						</Link>
						<Link
							className="px-2 text-xs text-white font-bold hover:text-white"
							to="#"
							target="_blank"
						>
							Advertising Disclosure
						</Link>
						<Link
							className="px-2 text-xs text-white font-bold hover:text-white"
							to="#"
							target="_blank"
						>
							Do Not Sell My Info
						</Link>
					</div>
				</div>
			</footer>
		</main>
	);
}

export default StepperElementThree;
