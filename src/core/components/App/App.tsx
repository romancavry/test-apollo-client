import * as React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import routes from 'core/routesPaths';

import { Auth, Chat, Home } from 'pages';

import { AuthorizedOnlyRoute } from 'components/AuthorizedOnlyRoute';
import { UnauthorizedOnlyRoute } from 'components/UnauthorizedOnlyRoute';

import { globals, variables } from 'uikit/theme';

import { AppContainer } from './styled';

const App = () => (
  <AppContainer>
    <Helmet>
      <body className={`${globals} ${variables}`} />
    </Helmet>

    <BrowserRouter>
      <RouterRoutes>
        <Route path={routes.home} {...Home} />

        <Route element={<UnauthorizedOnlyRoute />}>
          <Route path={routes.auth} {...Auth} />
        </Route>

        <Route element={<AuthorizedOnlyRoute />}>
          <Route path={routes.chat} {...Chat} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  </AppContainer>
);

export default App;
