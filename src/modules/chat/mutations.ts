import { gql } from '@apollo/client';

export const POST_MESSAGE = gql`
  mutation postMessage($text: String!) {
    postMessage(text: $text)
  }
`;
