import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Header, Hero } from './components';
import { Wrapper } from './styled';

const Home = () => (
  <Wrapper>
    <Helmet>
      <title>Folto. Home</title>
    </Helmet>

    <Header />
    <Hero />
  </Wrapper>
);

export default Home;
