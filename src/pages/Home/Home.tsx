import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'modules/auth/hooks';

import { AuthForm, Header } from './components';
import { AppContainer } from './styled';

const Home = () => {
  const { isAuth } = useAuth();

  console.log('isAuth: ', isAuth);

  return (
    <AppContainer>
      {isAuth ? (
        <React.Fragment>
          <Header />

          <Outlet />
        </React.Fragment>
      ) : (
        <AuthForm />
      )}
    </AppContainer>
  );
};

export default Home;
