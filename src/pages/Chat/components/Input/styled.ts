import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const Wrapper = styled.div`
  display: flex;
  max-width: 500px;
  max-height: 40px;
`;

export const inputStyle = css`
  & > div {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const buttonStyle = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
