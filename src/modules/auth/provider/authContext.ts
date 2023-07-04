import { createContext } from 'react';

import type { AuthContextValue } from './types';

const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => {},
  userLoading: true,
});

export default AuthContext;
