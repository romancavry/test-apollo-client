import * as React from 'react';
import { useSubscription } from '@apollo/client';

import { MESSAGES } from 'modules/chat';
import type { Message as MessageType } from 'modules/chat';

import { Message, Input } from '../../components';
import { Wrapper } from './styled';

const Messages = () => {
  const { data } = useSubscription(MESSAGES);

  return (
    <Wrapper>
      {data ? (
        <React.Fragment>
          {data.messages.map((message: MessageType) => (
            <Message key={message.id} message={message} />
          ))}

          <Input />
        </React.Fragment>
      ) : (
        <p>Loading...</p> // TODO: loader
      )}
    </Wrapper>
  );
};

export default Messages;
