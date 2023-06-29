import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Scholarships from "./pages/Scholarships";
import Testimonals from "./pages/Testimonals";
import Stepper from "./pages/Register/Scholarships";
import FindScholarship from "./pages/Register";
import Login from "./pages/Scholarships/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<Switch>
			<Layout>
				<Route exact path="/" component={Home} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/aboutus" component={AboutUs} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/admissions" component={FindScholarship} />
				<Route exact path="/stepper" component={Stepper} />
				<Route exact path="/contactus" component={ContactUs} />
				<Route exact path="/scholarships" component={Scholarships} />
				<Route exact path="/testimonals" component={Testimonals} />
			</Layout>
		</Switch>
	);
};

export default App;
