import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import routes from 'core/routesPaths';

import { getCachedUser } from 'modules/auth/cache';

const AuthorizedOnlyRoute = () => {
  const user = getCachedUser();

  if (!user) {
    return <Navigate to={routes.auth} />;
  }

  return <Outlet />;
};

export default AuthorizedOnlyRoute;
