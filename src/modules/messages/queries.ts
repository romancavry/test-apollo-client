import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages($ids: [Int]!) {
    getMessages(ids: $ids) {
      id
      text
      senderId
      dialogueId
      createdAt
    }
  }
`;
