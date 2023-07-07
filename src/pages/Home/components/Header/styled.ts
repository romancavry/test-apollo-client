import { styled } from '@linaria/react';
import { Link as _Link } from 'react-router-dom';

import { COLOR, MEDIA, TEXT, TRANSITION } from 'uikit/vars';

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

export const Link = styled(_Link)`
  ${TEXT.MAIN_BOLD};
  color: var(${COLOR.LINK});
  text-transform: uppercase;

  transition: var(${TRANSITION.MAIN});

  &:hover {
    opacity: 0.5;
  }
`;
