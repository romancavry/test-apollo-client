import { gql } from '@apollo/client';

export const CREATE_DIALOGUE = gql`
  mutation createDialogue($name: String!) {
    createDialogue(name: $name)
  }
`;
