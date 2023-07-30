import * as React from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_DIALOGUE } from 'modules/dialogues';

import { Input } from 'uikit/atoms';

import { Wrapper, Button } from './styled';

const CreateDialogue = () => {
  const [createDialogue] = useMutation(CREATE_DIALOGUE, {
    refetchQueries: ['getDialogues'],
  });

  const [dialogueName, setDialogueName] = React.useState('');

  const onChangeDialogueName = React.useCallback((e: React.ChangeEvent) => {
    const {
      target: { value },
    } = e as React.ChangeEvent<HTMLInputElement>;

    setDialogueName(value);
  }, []);

  const onCreateDialogue = React.useCallback(async () => {
    await createDialogue({
      variables: { name: dialogueName },
    });

    setDialogueName('');
  }, [createDialogue, dialogueName]);

  return (
    <Wrapper>
      <Input value={dialogueName} onChange={onChangeDialogueName} />

      <Button
        variant='primary'
        onClick={onCreateDialogue}
        disabled={!dialogueName}
      >
        Create dialogue
      </Button>
    </Wrapper>
  );
};

export default CreateDialogue;
