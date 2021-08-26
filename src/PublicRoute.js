import { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Auth } from "./pages/login/AuthContext";

export function PublicRoute({ children, ...rest }) {
  const { user } = useContext(Auth);
  console.log(user);
  return (
    <Route
      {...rest}
      render={() => {
        return !user ? children : <Redirect to="/timeline" />;
      }}
    />
  );
}
