import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages($dialogueId: Int!) {
    getMessages(dialogueId: $dialogueId) {
      id
      text
      senderId
      dialogueId
      createdAt
    }
  }
`;
