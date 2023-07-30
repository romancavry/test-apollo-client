import client from 'app/apollo/client';

import { getCachedUser } from 'modules/auth/cache';

import { GET_DIALOGUES } from './queries';
import type { Dialogue } from './types';

export const getCachedDialogues = (): Dialogue[] => {
  const user = getCachedUser();

  if (user) {
    const cachedDialogues = client.readQuery({
      query: GET_DIALOGUES,
    });

    if (cachedDialogues) {
      const { getDialogues: dialogues } = cachedDialogues;
      return dialogues;
    }
  }

  return [];
};
