import type { User } from '../types';

export interface AuthContextValue {
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User) => void;
  userLoading: boolean;
}
