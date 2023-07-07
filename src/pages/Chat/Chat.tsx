import * as React from 'react';
import { useMutation } from '@apollo/client';
import { Helmet } from 'react-helmet';

import { useAuth } from 'modules/auth/hooks';
import { CREATE_DIALOGUE, GET_DIALOGUES } from 'modules/chat';
import type { Dialogue } from 'modules/chat';

import { Wrapper } from './styled';

const Chat = () => {
  const [createDialogue] = useMutation(CREATE_DIALOGUE);
  const [getApiDialogues] = useMutation(GET_DIALOGUES);

  const { user } = useAuth();
  console.log('user: ', user);

  const [dialogues, setDialogues] = React.useState<Dialogue[]>([]);

  const getUserDialogues = React.useCallback(async () => {
    try {
      const {
        data: { getDialogues: dialogues },
      } = await getApiDialogues({
        variables: {
          ids: user!.dialoguesIds,
        },
      });

      setDialogues(dialogues);
    } catch (err) {
      // ...
    }
  }, [getApiDialogues, user]);

  React.useEffect(() => {
    getUserDialogues();
  }, [getUserDialogues]);

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
