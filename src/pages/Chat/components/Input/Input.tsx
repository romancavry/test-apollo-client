import * as React from 'react';
import { useMutation } from '@apollo/client';

import { POST_MESSAGE } from 'modules/messages';

import { Button, Input as InputComponent } from 'uikit/atoms';

import { Wrapper, inputStyle, buttonStyle } from './styled';

interface InputProps {
  dialogueId: number | null;
}

const Input: React.FC<InputProps> = ({ dialogueId }) => {
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

    setValue('');
  };

  return (
    <Wrapper>
      <InputComponent
        className={inputStyle}
        value={value}
        onChange={onInputChange}
      />

      <Button className={buttonStyle} onClick={onSend}>
        SEND
      </Button>
    </Wrapper>
  );
};

export default Input;
