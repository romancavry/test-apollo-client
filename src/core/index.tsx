import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import apolloClient from 'app/apollo/client';

import { AuthProvider } from 'modules/auth/provider';

import { App } from './components';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById('app'),
);
