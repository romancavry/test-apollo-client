import * as React from 'react';
import { gql, useMutation } from '@apollo/client';

const POST_MESSAGE = gql`
  mutation ($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const Input: React.FC = () => {
  console.log('input render');

  const user = 'Roman'; // temp

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
        user,
        content: value,
      },
    });
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
