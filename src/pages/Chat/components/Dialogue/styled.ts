import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0;
`;

export const Text = styled.p`
  ${TEXT.MAIN_BOLD};
  color: var(${COLOR.MAIN});
`;

export const Initials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  ${TEXT.MEDIUM};
  color: var(${COLOR.BG});

  border-radius: 50%;
  background: var(${COLOR.ACCENT});
`;
