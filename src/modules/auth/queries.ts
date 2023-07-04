import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser {
    getUser {
      id
      name
      email
      sentMessages {
        id
        text
        senderId
        dialogueId
        createdAt
      }
      dialogues {
        id
        name
      }
      createdAt
    }
  }
`;
