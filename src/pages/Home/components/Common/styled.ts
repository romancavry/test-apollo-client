import { styled } from '@linaria/react';

import { COLOR, MEDIA } from 'uikit/vars';

export const HomeSection = styled.section`
  padding: 20px;

  background: var(${COLOR.BG});

  &[data-no-padding] {
    padding: 0 !important;
  }

  &[data-light] {
    background: var(${COLOR.WHITE});
  }

  &[data-border] {
    border: 1px solid var(${COLOR.BORDER});
  }

  @media (min-width: ${MEDIA.TABLET_1}) {
    padding: 30px;
  }
`;
