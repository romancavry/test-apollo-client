import * as React from 'react';
import { useMutation } from '@apollo/client';

import { POST_MESSAGE } from 'modules/chat';

const Input: React.FC = () => {
  const [postMessage] = useMutation(POST_MESSAGE);

  const [value, setValue] = React.useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSend = () => {
    if (!value) {
      return;
    }

    postMessage({
      variables: {
        text: value,
      },
    });

    setValue('');
  };

  return (
    <div>
      <input value={value} onChange={onInputChange} />
      <button onClick={onSend} type='button'>
        SEND
      </button>
    </div>
  );
};

export default Input;
