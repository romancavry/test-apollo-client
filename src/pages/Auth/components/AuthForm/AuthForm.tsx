import * as React from 'react';

import { Login, Register } from './components';
import { Container } from './styled';

const AuthForm = () => (
  <Container>
    <Login />
    <Register />
  </Container>
);

export default AuthForm;
