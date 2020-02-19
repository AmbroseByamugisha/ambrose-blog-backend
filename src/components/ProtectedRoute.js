import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({
    component: Component,
    authUID,
    ...rest
  }) => (
    <Route
      {...rest}
      render={props =>
        authUID ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
export default ProtectedRoute;