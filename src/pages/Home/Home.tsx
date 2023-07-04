import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components';
import { AppContainer } from './styled';

const Home = () => (
  <AppContainer>
    <Header />
    HOME
    <Outlet />
  </AppContainer>
);

export default Home;
