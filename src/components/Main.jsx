import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import HotelResults from "./HotelResults";
import HotelSpecific from "./HotelSpecific";
import Contact from "./Contact";
import Login from "./Login";
import Messages from "./Messages";
import AdminEnquiries from "./AdminEnquiries";
import CreateEstablishment from "./CreateEstablishment";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/HotelResults" component={HotelResults} />
    <Route exact path="/HotelSpecific" component={HotelSpecific} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Messages" component={Messages} />
    <Route exact path="/AdminEnquiries" component={AdminEnquiries} />
    <Route exact path="/CreateEstablishment" component={CreateEstablishment} />
  </Switch>
);

export default Main;
