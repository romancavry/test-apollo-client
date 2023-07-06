import { gql } from '@apollo/client';

export const POST_MESSAGE = gql`
  mutation postMessage($text: String!) {
    postMessage(text: $text)
  }
`;

export const CREATE_DIALOGUE = gql`
  mutation createDialogue($name: String!) {
    createDialogue(name: $name)
  }
`;

export const GET_DIALOGUES = gql`
  mutation getDialogues($ids: [Int]!) {
    getDialogues(ids: $ids) {
      id
      name
      usersIds
      messagesIds
      createdAt
    }
  }
`;
