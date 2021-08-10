import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Timeline from "./pages/timeline/Timeline";
import NotFound from "./pages/not-found/Not-Found";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/timeline" component={Timeline}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
