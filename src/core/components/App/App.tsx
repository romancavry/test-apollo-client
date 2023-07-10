import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import routes from 'core/routesPaths';

import { Base, Home } from 'pages';

import { AuthorizedOnlyRoute } from 'components/AuthorizedOnlyRoute';
import { UnauthorizedOnlyRoute } from 'components/UnauthorizedOnlyRoute';

import { globals, variables } from 'uikit/theme';

import unauthorizedOnly from './unauthorizedOnly';
import authorizedOnly from './authorizedOnly';

import { AppContainer } from './styled';

const router = createBrowserRouter([
  {
    ...Base,
    children: [
      {
        path: routes.home,
        ...Home,
      },
      {
        element: <UnauthorizedOnlyRoute />,
        children: unauthorizedOnly,
      },
      {
        element: <AuthorizedOnlyRoute />,
        children: authorizedOnly,
      },
    ],
  },
]);

const App = () => (
  <AppContainer>
    <Helmet>
      <body className={`${globals} ${variables}`} />
    </Helmet>

    <RouterProvider router={router} />
  </AppContainer>
);

export default App;
