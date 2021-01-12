import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../../components/Preloader/Preloader';

const ProtectedRoute = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  // const [loading, setLoading] = React.useState(false);
  console.log(currentUser.id)
  console.log(props.loading)

  return (
    <Route>
      {() => {
        if (props.loggedIn) {
          return props.children;
        }
        // if (!currentUser.id) {
        //   props.handleLoginPopupClick();
        //   return <Redirect to='/' />;
        // }
        else if (props.loading) {
          <Preloader />
          //   props.handleLoginPopupClick();
          //   return <Redirect to='/' />;
          // }
        }
        // else {
        //   props.handleLoginPopupClick();
        //   return <Redirect to='/' />;
        // }
      }}
    </Route>
  );
};

export default ProtectedRoute;