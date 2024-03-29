import * as React from 'react';

import routes from 'core/routesPaths';

import { BaseContainer } from 'pages/Base/styled';

import { HeaderSection, Navigation, List, Item, NavLink } from './styled';

const Header = () => (
  <HeaderSection>
    <BaseContainer>
      <Navigation>
        <List>
          <Item>
            <NavLink aria-current to={routes.home}>
              Home
            </NavLink>
          </Item>

          <Item>
            <NavLink aria-current to={routes.chat}>
              Chat
            </NavLink>
          </Item>
        </List>
      </Navigation>
    </BaseContainer>
  </HeaderSection>
);

export default Header;
