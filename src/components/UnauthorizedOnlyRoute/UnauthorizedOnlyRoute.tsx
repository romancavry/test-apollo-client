import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import routes from 'core/routesPaths';

import { useAuth } from 'modules/auth/hooks';

const UnauthorizedOnlyRoute = () => {
  const { user, userLoading } = useAuth();

  // Do not show content if user is loading
  if (userLoading) {
    return null;
  }

  if (user) {
    return <Navigate to={routes.home} />;
  }

  return <Outlet />;
};

export default UnauthorizedOnlyRoute;
