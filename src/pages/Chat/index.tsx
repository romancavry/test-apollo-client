import * as React from 'react';
import { redirect } from 'react-router-dom';
import type { IndexRouteProps } from 'react-router-dom';

import routes from 'core/routesPaths';

import client from 'app/apollo/client';

import { GET_DIALOGUES } from 'modules/chat';
import { getUser } from 'modules/auth/selectors';

import Chat from './Chat';

const definition: IndexRouteProps = {
  element: <Chat />,
  index: true,
  loader: async () => {
    const user = getUser();

    if (!user) {
      return redirect(routes.home);
    }

    const {
      data: { getDialogues: dialogues },
    } = await client.mutate({
      mutation: GET_DIALOGUES,
      variables: {
        ids: user!.dialoguesIds,
      },
    });

    return dialogues || [];
  },
};

export default definition;
