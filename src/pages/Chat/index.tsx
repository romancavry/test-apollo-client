import * as React from 'react';
import type { IndexRouteProps } from 'react-router-dom';

import client from 'app/apollo/client';

import { GET_DIALOGUES } from 'modules/chat';
import { GET_USER } from 'modules/auth';

import Chat from './Chat';

const definition: IndexRouteProps = {
  element: <Chat />,
  index: true,
  loader: async () => {
    const { getUser: user } = await client.readQuery({
      query: GET_USER,
    });

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
