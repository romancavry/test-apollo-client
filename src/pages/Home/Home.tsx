import * as React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import { AuthForm, Header } from './components';
import { AppContainer } from './styled';

const Home = () => {
  const isAuth = useLoaderData();
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
