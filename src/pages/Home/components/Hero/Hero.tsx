import * as React from 'react';

import { HomeSection } from 'pages/Home/components';

import { Wrapper, Title } from './styled';

const Hero = () => (
  <HomeSection data-light>
    <Wrapper>
      <Title>Folto. The simpliest chat app.</Title>
    </Wrapper>
  </HomeSection>
);

export default Hero;
