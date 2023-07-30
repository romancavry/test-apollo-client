import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import routes from 'core/routesPaths';

import { getCachedUser } from 'modules/auth/cache';

const UnauthorizedOnlyRoute = () => {
  const user = getCachedUser();

  if (user) {
    return <Navigate to={routes.home} />;
  }

  return <Outlet />;
};

export default UnauthorizedOnlyRoute;
