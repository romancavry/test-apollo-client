import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import type { Dialogue as DialogueType } from 'modules/chat';

import { CreateDialogue, Dialogue } from './components';
import { HomeSection, Inner, Dialogues, Text } from './styled';

const Chat = () => {
  const dialogues = useLoaderData() as unknown as DialogueType[];
  console.log('dialogues: ', dialogues);

  return (
    <HomeSection data-light data-no-padding>
      <Helmet>
        <title>Folto. Chat</title>
      </Helmet>

      <Inner>
        <Dialogues>
          <Text data-uppercase>Dialogues</Text>

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
