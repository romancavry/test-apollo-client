import * as React from 'react';
import { Link } from 'react-router-dom';

import routes from 'core/routes';

const Header = () => {
  console.log('Header');

  return (
    <div>
      <Link to={routes.chat}>CHAT</Link>
    </div>
  )
};

export default Header;
