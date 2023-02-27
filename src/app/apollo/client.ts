import { ApolloClient, InMemoryCache } from '@apollo/client';

import { fullApiUrl } from 'config';

import splitLink from './ws';

const client = new ApolloClient({
  link: splitLink,
  uri: fullApiUrl,
  cache: new InMemoryCache()
});

export default client;
