import * as React from 'react';
import { useSubscription } from '@apollo/client';

import { MESSAGES_SUBSCRIPTION } from 'modules/messages';
import type { Message as MessageType } from 'modules/messages';

import { Message } from '../../components';
import { Wrapper } from './styled';

const Messages = () => {
  const { data } = useSubscription(MESSAGES_SUBSCRIPTION);

  return (
    <Wrapper>
      {data ? (
        <React.Fragment>
          {data.messages.map((message: MessageType) => (
            <Message key={message.id} message={message} />
          ))}
        </React.Fragment>
      ) : (
        <p>Loading...</p> // TODO: loader
      )}
    </Wrapper>
  );
};

export default Messages;
