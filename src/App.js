import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Register from './pages/Register'
import ContactUs from './pages/ContactUs';
import Scholarships from './pages/Scholarships';
import Testimonals from './pages/Testimonals';
import Stepper from './pages/Register/Scholarships';
import Login from './pages/Login';
const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/stepper" component={Stepper} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/scholarships" component={Scholarships} />
          <Route exact path="/testimonals" component={Testimonals} />
        </Layout>
      </Route>
    </Switch>
  )
}

export default App;
