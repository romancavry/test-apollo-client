import * as React from 'react';
import { redirect } from 'react-router-dom';
import type { IndexRouteProps } from 'react-router-dom';

import routes from 'core/routesPaths';

import client from 'app/apollo/client';

import { GET_DIALOGUES } from 'modules/dialogues';
import { getCachedUser } from 'modules/auth/cache';

import Chat from './Chat';

const definition: IndexRouteProps = {
  element: <Chat />,
  index: true,
  loader: async () => {
    const user = getCachedUser();

    if (!user) {
      return redirect(routes.auth);
    }

    await client.query({
      query: GET_DIALOGUES,
    });

    return [];
  },
};

export default definition;
