import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { CREATE_DIALOGUE } from 'modules/chat';
import type { Dialogue } from 'modules/chat';

import { Wrapper } from './styled';

const Chat = () => {
  const dialogues = useLoaderData() as unknown as Dialogue[];
  console.log('dialogues: ', dialogues);

  const [createDialogue] = useMutation(CREATE_DIALOGUE);

  return (
    <Wrapper>
      <Helmet>
        <title>Folto. Chat</title>
      </Helmet>

      <button
        type='button'
        onClick={() => createDialogue({ variables: { name: 'asdfboba' } })}
      >
        Create dialogue
      </button>

      {dialogues.map((dialogue: Dialogue) => (
        <div key={dialogue.id}>{dialogue.name}</div>
      ))}
    </Wrapper>
  );
};

export default Chat;
