import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import JobStep1 from "./pages/Register/Scholarships/jobs/JobStep1";
import JobStep2 from "./pages/Register/Scholarships/jobs/JobStep2";
import JobStep3 from "./pages/Register/Scholarships/jobs/JobStep3";
import { Spin } from "antd";
import Policy from "./pages/policyPage/Policy";

// Lazy-loaded components
const Home = lazy(() => import("./pages/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs/index"));
const Blog = lazy(() => import("./pages/Blog"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Scholarships = lazy(() => import("./pages/Scholarships"));
const Testimonals = lazy(() => import("./pages/Testimonals"));
const Stepper = lazy(() => import("./pages/Register/Scholarships"));
const FindScholarship = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Scholarships/Login"));
const Signin = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const PasswordReset = lazy(() => import("./pages/PasswordReset"));
const Payment = lazy(() => import("./pages/payment"));
const RootScholarship = lazy(() => import("./pages/Dashboard/scholarship"));
const MainProfile = lazy(() => import("./pages/Dashboard/Profile"));
const Accordion = lazy(() => import("./accordion/Accordion"));
const RootApplication = lazy(() => import("./pages/Dashboard/applications"));
const StepperElementFour = lazy(() =>
	import("./pages/Register/Scholarships/StepperElementFour")
);
const StepperElementSix = lazy(() =>
	import("./pages/Register/Scholarships/StepperElementSix")
);
const StepperElement7 = lazy(() =>
	import("./pages/Register/Scholarships/StepperElement7")
);
const StepElement8 = lazy(() =>
	import("./pages/Register/Scholarships/StepElement8")
);
const StepComfirmation = lazy(() =>
	import("./pages/Register/Scholarships/StepComfirmation")
);
const Index = lazy(() => import("../src/pages/profile/index"));
const Favorite = lazy(() => import("./pages/favorite"));

const App = () => {
	return (
		<Suspense
			fallback={
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "8rem"
					}}
				>
					<img
						style={{
							width: "4rem ",
							height: "5rem",
							justifyContent: "center",
							alignItems: "center"
						}}
						src="https://res.cloudinary.com/itgenius/image/upload/v1690434896/Kodo_Scholarship_Loader_rgev72.gif"
						alt="middle"
					/>{" "}
				</div>
			}
		>
			<Switch>
				<Route exact path="/index" component={Index} />
				<Route exact path="/signin" component={Signin} />
				<Route exact path="/forgot/password" component={ForgotPassword} />
				<Route path="/reset-password" component={PasswordReset} />
				<PrivateRoute exact path="/scholars" component={RootScholarship} />
				<PrivateRoute
					exact
					path="/applications"
					component={RootApplication}
				/>
				<PrivateRoute exact path="/favorite" component={Favorite} />
				<PrivateRoute exact path="/profile" component={MainProfile} />
				<Route exact path="/route1" component={StepperElementSix} />
				<Route exact path="/route2" component={StepperElement7} />
				<Route exact path="/verify" component={StepComfirmation} />
				<Route exact path="/final" component={StepElement8} />
				<Route exact path="/stepper" component={Stepper} />
				<Route exact path="/JobStep1" component={JobStep1} />
				<Route exact path="/JobStep2" component={JobStep2} />
				<Route exact path="/JobStep3" component={JobStep3} />
				<Route exact path="/policy" component={Policy} />
				<Route
					exact
					path="/educationlevel"
					component={StepperElementFour}
				/>

				<Layout>
					<PrivateRoute path="/payment" component={Payment} />
					<Route exact path="/aboutus" component={AboutUs} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/admissions" component={FindScholarship} />

					<Route exact path="/contactus" component={ContactUs} />
					<Route exact path="/scholarships" component={Accordion} />
					<Route exact path="/testimonals" component={Testimonals} />
					<Route exact path="/" component={Home} />
				</Layout>
			</Switch>
		</Suspense>
	);
};

export default App;
