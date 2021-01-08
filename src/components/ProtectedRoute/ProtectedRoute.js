import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
    return (
      <Route>
        {() => {
          if (props.loggedIn) {
            return props.children;
          } else {
            props.handleLoginPopupClick();
            return <Redirect to="/" />;
          }
        }}
      </Route>
    );
  };

export default ProtectedRoute;