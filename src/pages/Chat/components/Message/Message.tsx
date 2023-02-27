import * as React from 'react';

interface MessageProps {
  content: string;
}

const Message: React.FC<MessageProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default Message;
