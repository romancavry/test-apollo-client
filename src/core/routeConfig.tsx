import type { RouteObject } from 'react-router-dom';

import routes from './routes';

import { Home, Chat } from 'pages';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    ...Home,

    children: [
      {
        path: routes.chat,
        ...Chat
      }
    ]
  }
];

export default routeConfig;
