import { styled } from '@linaria/react';
import { Link as _Link } from 'react-router-dom';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div``;

export const Link = styled(_Link)`
  ${TEXT.MAIN};
  color: var(${COLOR.MAIN});
`;
