import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const ProtectedRoute = (props) => {
  // const currentUser = React.useContext(CurrentUserContext);

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