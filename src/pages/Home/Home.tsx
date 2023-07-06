import * as React from 'react';
import { Helmet } from 'react-helmet';

import { AppContainer } from 'components/App';

import { Header, Hero } from './components';

const Home = () => (
  <AppContainer>
    <Helmet>
      <title>Folto. Home</title>
    </Helmet>

    <Header />

    <Hero />
  </AppContainer>
);

export default Home;
