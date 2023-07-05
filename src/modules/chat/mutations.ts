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
