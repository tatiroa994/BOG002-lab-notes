import { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Auth } from "./pages/login/AuthContext";


export function PrivateRoute(props) {
  const { user } = useContext(Auth);
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/login" />;
      }}
    />
  );
}
