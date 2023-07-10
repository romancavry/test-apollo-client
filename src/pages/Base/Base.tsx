import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components';
import { BaseContainer, BaseWrapper } from './styled';

const Base = () => (
  <BaseWrapper>
    <Header />

    <BaseContainer>
      <Outlet />
    </BaseContainer>
  </BaseWrapper>
);

export default Base;
