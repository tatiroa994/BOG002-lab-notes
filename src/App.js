import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Timeline from "./pages/timeline/Timeline";
import NotFound from "./pages/not-found/Not-Found";
import Home from "./pages/home/Home";
import ResetPass from "./pages/Reset-pass/ResetPass";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthContext } from "./pages/login/AuthContext";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/timeline">
            <Timeline />
          </PrivateRoute>
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute exact path="/register">
            <Register />
          </PublicRoute>
          <PublicRoute exact path="/resetPass">
            <ResetPass />
          </PublicRoute>
          <PublicRoute exact path="/">
            <Home />
          </PublicRoute>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </AuthContext>
  );
}
export default App;
