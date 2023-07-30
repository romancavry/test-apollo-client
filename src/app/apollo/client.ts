import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { fullApiUrl } from 'config';

import { getToken } from 'modules/auth';

import splitLink from './ws';

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  uri: fullApiUrl,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
