import { styled } from '@linaria/react';
import { MEDIA } from 'uikit/vars';

export const AppContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  max-width: 1450px;
  width: 100%;

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 30px;
  }
`;
