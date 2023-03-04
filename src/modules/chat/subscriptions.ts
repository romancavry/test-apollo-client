import { gql } from '@apollo/client';

export const MESSAGES = gql`
  subscription messages {
    messages {
      id
      text
      createdAt
      dialogueId
    }
  }
`;
