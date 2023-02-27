import type { RouteObject } from 'react-router-dom';

import { Home, Chat } from 'pages';

import routes from './routes';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    ...Home,

    children: [
      {
        path: routes.chat,
        ...Chat,
      },
    ],
  },
];

export default routeConfig;
