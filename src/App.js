import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import JobStep1 from "./pages/Register/Scholarships/jobs/JobStep1";
import JobStep2 from "./pages/Register/Scholarships/jobs/JobStep2";
import JobStep3 from "./pages/Register/Scholarships/jobs/JobStep3";

import RSSUsage from "./pages/share/RSSUsage";
import Privacy from "./pages/policyPage";
import ScholarshipDetailsPage from "./pages/Dashboard/scholarship/ScholarshipDetailsPage";
import { googleTranslateElementInit } from "./googleTranslate";

// Lazy-loaded components
const Home = lazy(() => import("./pages/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs/index"));
const Blog = lazy(() => import("./pages/Blog"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Testimonals = lazy(() => import("./pages/Testimonals"));
const Stepper = lazy(() => import("./pages/Register/Scholarships"));
const Sports = lazy(() => import("./pages/Register/Scholarships/Sports"));
const FindScholarship = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Scholarships/Login"));
const Signin = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const PasswordReset = lazy(() => import("./pages/PasswordReset"));
const Payment = lazy(() => import("./pages/payment"));
const PaymentJobs = lazy(() => import("./pages/payment/jobs"));

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
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div id="google_translate_element">
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "18rem",
            }}
          >
            <img
              style={{
                width: "7rem ",
                height: "7rem",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="https://res.cloudinary.com/itgenius/image/upload/v1692167806/Kodo-Scholarship-Loader2-1_b89na9.gif"
              alt="middle"
            />{" "}
          </div>
        }
      >
        <Switch>
          <Route exact path="/index" component={Index} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/login/:userId" component={Login} />

          <Route exact path="/forgot/password" component={ForgotPassword} />
          <Route path="/reset-password/:token" component={PasswordReset} />
          <PrivateRoute exact path="/scholars" component={RootScholarship} />
          <PrivateRoute exact path="/favorite" component={Favorite} />
          <PrivateRoute exact path="/profile" component={MainProfile} />
          <Route exact path="/route1" component={StepperElementSix} />
          <Route exact path="/route2" component={StepperElement7} />
          <Route exact path="/verify" component={StepComfirmation} />
          <Route exact path="/final" component={StepElement8} />
          <Route exact path="/stepper" component={Stepper} />
          <Route exact path="/details/:id" component={ScholarshipDetailsPage} />
          <Route exact path="/JobStep1" component={JobStep1} />
          <Route exact path="/JobStep2" component={JobStep2} />
          <Route exact path="/JobStep3" component={JobStep3} />
          <Route exact path="/policy" component={Privacy} />
          <Route exact path="/share" component={RSSUsage} />
          <Route exact path="/player" component={Sports} />

          <Route exact path="/educationlevel" component={StepperElementFour} />
          <PrivateRoute
            exact
            path="/applications"
            component={RootApplication}
          />

          <Layout>
            <PrivateRoute path="/payment" component={Payment} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/blog" component={Blog} />
            <Route exact path="/admissions" component={FindScholarship} />
            <Route
              exact
              path="/admissions/:userId"
              component={FindScholarship}
            />
            <Route exact path="/payjobs" component={PaymentJobs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/scholarships" component={Accordion} />
            <Route exact path="/testimonals" component={Testimonals} />
            <Route exact path="/" component={Home} />
          </Layout>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
