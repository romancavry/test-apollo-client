import * as React from 'react';

import routes from 'core/routesPaths';

import { HomeSection } from 'pages/Home/components';

import { Navigation, List, Item, Link } from './styled';

const Header = () => (
  <HomeSection data-border>
    <Navigation>
      <List>
        <Item>
          <Link to={routes.home}>Home</Link>
        </Item>

        <Item>
          <Link to={routes.chat}>Chat</Link>
        </Item>
      </List>
    </Navigation>
  </HomeSection>
);

export default Header;
