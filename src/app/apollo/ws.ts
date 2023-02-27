import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

import * as API_SETTINGS from 'config';

const httpLink = new HttpLink({
  uri: API_SETTINGS.fullApiUrl,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://${API_SETTINGS.REACT_APP_API_HOST}/${API_SETTINGS.REACT_APP_API_ENDPOINT}`,
  }),
);

/*
  The split function takes three parameters:

  * A function that's called for each operation to execute
  * The Link to use for an operation if the function returns a "truthy" value
  * The Link to use for an operation if the function returns a "falsy" value

  What meant by split see here, point 3:
    "https://www.apollographql.com/docs/react/data/subscriptions/#server-side"
*/

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export default splitLink;
