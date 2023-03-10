import * as React from 'react';
import { Link } from 'react-router-dom';

import routes from 'core/routes';

// eslint-disable-next-line arrow-body-style
const Header = () => {
  return (
    <div>
      <Link to={routes.chat}>CHAT</Link>
    </div>
  );
};

export default Header;
