import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = () => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          <div>{children}</div>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
