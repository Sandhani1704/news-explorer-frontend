import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {

  return (
    <Route>
      {() => {
        const token = localStorage.getItem('token');

        if (token) {
          return props.children;
        }
        else {
          props.handleLoginPopupClick();
          return <Redirect to='/' />;
        }
      }
      }
    </Route>
  );
};

export default ProtectedRoute;