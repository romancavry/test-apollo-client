import * as React from 'react';
import { useMutation } from '@apollo/client';

import { useAuth } from 'modules/auth/hooks';
import { CREATE_DIALOGUE } from 'modules/chat';

import Messages from './components/Messages/Messages';
import { Wrapper } from './styled';

const Chat = () => {
  const [createDialogue] = useMutation(CREATE_DIALOGUE);

  const { user } = useAuth();
  console.log('user: ', user);

  return (
    <Wrapper>
      <button
        type='button'
        onClick={() => createDialogue({ variables: { name: 'asdfboba' } })}
      >
        Create dialogue
      </button>

      <Messages />
    </Wrapper>
  );
};

export default Chat;
