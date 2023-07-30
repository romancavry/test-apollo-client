import { gql } from '@apollo/client';

export const GET_DIALOGUES = gql`
  query getDialogues {
    getDialogues {
      id
      name
      usersIds
      messagesIds
      createdAt
    }
  }
`;
