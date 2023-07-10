import type { RouteObject } from 'react-router-dom';

import routes from 'core/routesPaths';

import { Chat } from 'pages';

export default [
  {
    path: routes.chat,
    ...Chat,
  },
] as RouteObject[];
