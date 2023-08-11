import { gql } from '@apollo/client';

export const POST_MESSAGE = gql`
  mutation postMessage($text: String!, $dialogueId: Int!) {
    postMessage(text: $text, dialogueId: $dialogueId)
  }
`;
