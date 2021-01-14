import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../../components/Preloader/Preloader';

const ProtectedRoute = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  // const [loading, setLoading] = React.useState(false);
  console.log(currentUser)
  console.log(props.loggedIn)

  return (
    <Route>
      {() => {
        if (props.loggedIn) {
          return props.children;
        }
        else {
          <Preloader />
          props.handleLoginPopupClick();
          return <Redirect to='/' />;
        }
      }
      }
    </Route>
  );
};

export default ProtectedRoute;