import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.login);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <div>{children}</div>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
