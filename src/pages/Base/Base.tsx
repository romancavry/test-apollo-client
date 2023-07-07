import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components';
import { BaseWrapper } from './styled';

const Base = () => (
  <BaseWrapper>
    <Header />

    <Outlet />
  </BaseWrapper>
);

export default Base;
