import type { RouteObject } from 'react-router-dom';

import { Home } from 'pages';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    ...Home,
  },
];

export default publicRoutes;
