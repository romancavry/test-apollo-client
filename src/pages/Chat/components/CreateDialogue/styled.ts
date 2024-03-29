import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { Button as _Button } from 'uikit/atoms';

export const Wrapper = styled.div``;

export const Button = styled(_Button)`
  width: 100%;
`;

export const inputStyle = css`
  & > div {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const buttonStyle = css`
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;
