import * as React from 'react';
import { useSubscription } from '@apollo/client';

import { NEW_MESSAGE } from "modules/chat";
import type { Message as MessageType } from 'modules/chat';

import { Message, Input } from './components';
import { Wrapper } from './styled';

const Chat = () => {
  // TODO: typescript
  const { data } = useSubscription(NEW_MESSAGE);
  console.log('data: ', data);

  return (
    <Wrapper>
      {data ? (
        <>
          {data.messages.map((message: MessageType) => (
            <Message key={message.id} content={message.content} />
          ))}

          <Input />
        </>
      ) : (
        <p>Loading...</p> // TODO: loader
      )}
    </Wrapper>
  );
};

export default Chat;
