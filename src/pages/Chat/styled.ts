import { styled } from '@linaria/react';

import { HEADER_HEIGHT } from 'modules/ui';

import { HomeSection as _HomeSection } from 'pages/Home/components';

import { COLOR, MEDIA, TEXT } from 'uikit/vars';

export const HomeSection = styled(_HomeSection)`
  padding: 0 20px 20px;

  @media (min-width: ${MEDIA.TABLET_1}) {
    padding: 0 30px 30px;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 15px;

  border-bottom: 1px solid var(${COLOR.BORDER});

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    grid-template-columns: 300px 1fr;
  }
`;

export const Dialogues = styled.div`
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  height: calc(100vh - (${HEADER_HEIGHT}px + 5px));

  border-right: 1px solid var(${COLOR.BORDER});
`;

export const Text = styled.p`
  ${TEXT.MAIN_BOLD};
  color: var(${COLOR.MAIN});

  &[data-uppercase] {
    text-transform: uppercase;
  }
`;
