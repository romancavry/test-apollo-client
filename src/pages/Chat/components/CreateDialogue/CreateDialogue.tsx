import * as React from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_DIALOGUE } from 'modules/chat';

import { Button } from './styled';

const CreateDialogue = () => {
  const [createDialogue] = useMutation(CREATE_DIALOGUE);

  return (
    <div>
      <p>CreateDialogue</p>

      <Button
        variant='primary'
        onClick={() => createDialogue({ variables: { name: 'asdfboba' } })}
      >
        Create dialogue
      </Button>
    </div>
  );
};

export default CreateDialogue;
