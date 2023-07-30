import client from 'app/apollo/client';

import { GET_USER } from './queries';
import type { User } from './types';

export const getCachedUser = (): User | null => {
  const cachedUser = client.readQuery({
    query: GET_USER,
  });

  if (cachedUser) {
    const { getUser: user } = cachedUser;
    return user;
  }

  return null;
};
