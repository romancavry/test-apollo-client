import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import routes from 'core/routesPaths';

import { useAuth } from 'modules/auth/hooks';

const AuthorizedOnlyRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={routes.auth} />;
  }

  return <Outlet />;
};

export default AuthorizedOnlyRoute;
