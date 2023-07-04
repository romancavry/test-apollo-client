import * as React from 'react';
import type { RouteObject } from 'react-router-dom';

import routes from 'core/routesPaths';

import { Auth } from 'pages';

import { UnauthorizedOnlyRoute } from 'components/UnauthorizedOnlyRoute';

const unauthorizedOnly: RouteObject[] = [
  {
    path: '/',
    element: <UnauthorizedOnlyRoute />,

    children: [
      {
        path: routes.auth,
        ...Auth,
      },
    ],
  },
];

export default unauthorizedOnly;
