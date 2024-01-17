import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { hasAccess } from '../services/wedding';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    async function checkAccess() {
      const userHasAccess = await hasAccess('wedding-alias', 'invitation-id');

      if (userHasAccess) {
        setIsAuthenticated(userHasAccess);
      }
    }

    checkAccess();
  }, []);

  const renderComponent = props => {
    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    } else if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/inicio" />;
    }
  };

  return <Route {...rest} render={renderComponent} />;
};

export default PrivateRoute;
