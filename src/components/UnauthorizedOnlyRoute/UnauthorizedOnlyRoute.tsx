import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import routes from 'core/routesPaths';

import { getUser } from 'modules/auth/selectors';

const UnauthorizedOnlyRoute = () => {
  const user = getUser();

  if (user) {
    return <Navigate to={routes.home} />;
  }

  return <Outlet />;
};

export default UnauthorizedOnlyRoute;
