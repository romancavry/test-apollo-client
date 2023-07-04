import * as React from 'react';
import type { RouteObject } from 'react-router-dom';

import routes from 'core/routesPaths';

import { Chat } from 'pages';

import { AuthorizedOnlyRoute } from 'components/AuthorizedOnlyRoute';

const authorizedOnly: RouteObject[] = [
  {
    path: '/',
    element: <AuthorizedOnlyRoute />,

    children: [
      {
        path: routes.chat,
        ...Chat,
      },
    ],
  },
];

export default authorizedOnly;
