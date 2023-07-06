import * as React from 'react';

import routes from 'core/routesPaths';

import { Wrapper, Link } from './styled';

const Header = () => (
  <Wrapper>
    <Link to={routes.chat}>CHAT</Link>
  </Wrapper>
);

export default Header;
