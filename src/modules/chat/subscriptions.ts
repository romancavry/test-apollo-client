import { gql } from '@apollo/client';

export const NEW_MESSAGE = gql`
  subscription OnNewMessage {
    messages {
      id
      content
      user
    }
  }
`;
