import * as React from 'react';
import { useQuery } from '@apollo/client';
import { Helmet } from 'react-helmet';

import { GET_DIALOGUES } from 'modules/dialogues';
import type { Dialogue as DialogueType } from 'modules/dialogues';

import { NoData } from 'components/NoData';

import { CreateDialogue, Dialogue } from './components';
import { HomeSection, Inner, Dialogues, Text } from './styled';

const Chat = () => {
  const { data } = useQuery(GET_DIALOGUES, {
    fetchPolicy: 'cache-only',
  });

  const dialogues = data?.getDialogues ?? [];

  return (
    <HomeSection data-light data-no-padding>
      <Helmet>
        <title>Folto. Chat</title>
      </Helmet>

      <Inner>
        <Dialogues>
          <Text data-uppercase>Dialogues</Text>

          {!dialogues.length && <NoData />}

          {dialogues.map((dialogue: DialogueType) => (
            <Dialogue key={dialogue.id} dialogue={dialogue} />
          ))}

          <CreateDialogue />
        </Dialogues>
      </Inner>
    </HomeSection>
  );
};

export default Chat;
