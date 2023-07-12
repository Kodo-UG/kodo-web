import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { ProtectedRoute } from "./protectedRoute";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUs/index";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Scholarships from "./pages/Scholarships";
import Testimonals from "./pages/Testimonals";
import Stepper from "./pages/Register/Scholarships";
import FindScholarship from "./pages/Register";
import Login from "./pages/Scholarships/Login";
import Signin from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import Root from "./pages/Dashboard";
import Payment from "./pages/payment";
import PrivateRoute from "./utils/PrivateRoute";
import RootScholarship from "./pages/Dashboard/scholarship";
import MainProfile from "./pages/Dashboard/Profile";
import Accordion from "./accordion/Accordion";
import RootApplication from "./pages/Dashboard/applications";
import StepperElementFour from "./pages/Register/Scholarships/StepperElementFour";
import StepperElementSix from "./pages/Register/Scholarships/StepperElementSix";
import StepperElement7 from "./pages/Register/Scholarships/StepperElement7";
import StepElement8 from "./pages/Register/Scholarships/StepElement8";
import StepComfirmation from "./pages/Register/Scholarships/StepComfirmation";
const App = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <Route path="/reset-password" component={PasswordReset} />
      <PrivateRoute exact path="/db" component={Root} />
      <PrivateRoute exact path="/scholars" component={RootScholarship} />
      <PrivateRoute exact path="/applications" component={RootApplication} />

      <Route exact path="/profile" component={MainProfile} />
      <Route exact path="/final" component={StepElement8} />
			<Route exact path="/test3" component={StepperElement7} />
			<Route  exact path="/test2" component={StepperElementSix} />
      <Route  exact path="/verify" component={StepComfirmation} />
      {/* <Route exact path="/stepper" component={Stepper} /> */}
      <Route exact path="/test" component={StepperElementFour} />
      <Route exact path="/stepper" component={Stepper} />
      <Layout>
        <Route path="/payment" component={Payment} />
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
  );
};

export default App;
