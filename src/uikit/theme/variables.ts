import { css } from '@linaria/core';

import { TRANSITION, COLOR } from '../vars';

export default css`
  ${COLOR.ACCENT}: #2094F0;
  ${COLOR.ACCENT_LIGHT}: #B5DDFD;

  ${COLOR.MAIN}: #2E2A36;

  ${COLOR.BG}: #F8F9FA;
  ${COLOR.BORDER}: #CFD8DC;
  ${COLOR.ERROR}: #F55252;

  ${COLOR.WHITE}: #FFFFFF;
  ${COLOR.BLACK}: #000000;

  ${TRANSITION.MAIN}: 0.2s ease-in-out;
`;
