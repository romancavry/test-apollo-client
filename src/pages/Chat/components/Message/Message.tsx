import * as React from 'react';

import type { Message as MessageType } from 'modules/chat';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { text } = message;

  return <div>{text}</div>;
};

export default Message;
