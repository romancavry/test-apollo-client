import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Hero } from './components';
import { Wrapper } from './styled';

const Home = () => (
  <Wrapper>
    <Helmet>
      <title>Folto. Home</title>
    </Helmet>

    <Hero />
  </Wrapper>
);

export default Home;
