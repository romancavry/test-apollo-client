import { styled } from '@linaria/react';
import { NavLink as _NavLink } from 'react-router-dom';

import { COLOR, MEDIA, TEXT, TRANSITION } from 'uikit/vars';

export const HeaderSection = styled.header`
  padding: 20px;

  background: var(${COLOR.BG});
  border: 1px solid var(${COLOR.BORDER});

  @media (min-width: ${MEDIA.TABLET_1}) {
    padding: 30px;
  }
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: ${MEDIA.TABLET_1}) {
    flex-direction: row;
  }
`;

export const Item = styled.li``;

// @ts-ignore
export const NavLink = styled(_NavLink)`
  ${TEXT.MAIN_BOLD};
  color: var(${COLOR.LINK});
  text-transform: uppercase;

  transition: var(${TRANSITION.MAIN});

  &:hover {
    opacity: 0.5;
  }

  &[aria-current] {
    color: var(${COLOR.MAIN});
  }
`;
