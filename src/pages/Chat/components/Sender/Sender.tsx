import * as React from 'react';
import { useMutation } from '@apollo/client';

import { POST_MESSAGE } from 'modules/messages';
import type { RefetchQuery } from 'modules/common';

import { Button, Input } from 'uikit/atoms';

import { Wrapper, inputStyle, buttonStyle } from './styled';

interface InputProps {
  refetch: RefetchQuery;
  dialogueId: number | null;
}

const Sender: React.FC<InputProps> = ({ refetch, dialogueId }) => {
  const [postApiMessage] = useMutation(POST_MESSAGE);

  const [value, setValue] = React.useState('');

  const onInputChange = (event: React.ChangeEvent) => {
    const {
      target: { value },
    } = event as React.ChangeEvent<HTMLInputElement>;

    setValue(value);
  };

  const onSend = async () => {
    if (!value) {
      return;
    }

    await postApiMessage({
      variables: {
        text: value,
        dialogueId,
      },
    });

    refetch();
    setValue('');
  };

  return (
    <Wrapper>
      <Input className={inputStyle} value={value} onChange={onInputChange} />

      <Button className={buttonStyle} onClick={onSend}>
        SEND
      </Button>
    </Wrapper>
  );
};

export default Sender;
