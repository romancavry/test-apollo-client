import type { RouteObject } from 'react-router-dom';

import routes from 'core/routesPaths';

import { Auth } from 'pages';

export default [
  {
    path: routes.auth,
    ...Auth,
  },
] as RouteObject[];
