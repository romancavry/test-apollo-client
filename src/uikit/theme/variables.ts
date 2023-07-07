import { css } from '@linaria/core';

import { TRANSITION, COLOR } from '../vars';

export default css`
  ${COLOR.MAIN}: #2E2A36;

  ${COLOR.BG}: #F8F9FA;
  ${COLOR.BORDER}: #CFD8DC;
  ${COLOR.LINK}: #2094F0;

  ${COLOR.WHITE}: #FFFFFF;
  ${COLOR.BLACK}: #000000;

  ${COLOR.INFO}: #2094F0;
  ${COLOR.ALERT}: #FFC107;
  ${COLOR.SUCCESS}: #4AB34F;
  ${COLOR.ERROR}: #F55252;

  ${TRANSITION.MAIN}: 0.2s ease-in-out;
`;
