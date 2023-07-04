import * as React from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_USER } from '../queries';
import type { User } from '../types';

import AuthContext from './authContext';
import type { AuthContextValue } from './types';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [getApiUser] = useLazyQuery(GET_USER);

  const isAuth = React.useRef(false);
  console.log('isAuth: ', isAuth.current);

  const [user, _setUser] = React.useState<User | null>(null);
  const [userLoading, setUserLoading] = React.useState(true);

  const setUser = React.useCallback((user: User) => {
    _setUser(user);
  }, []);

  const contextValue: AuthContextValue = React.useMemo(
    () => ({
      user,
      setUser,
      userLoading,
    }),
    [setUser, user, userLoading],
  );

  const getUser = React.useCallback(async () => {
    try {
      setUserLoading(true);

      const response = await getApiUser();

      if (!response.error) {
        const {
          data: { getUser: userData },
        } = response;

        setUser(userData);
        isAuth.current = true;
      }

      setUserLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('AuthProvider getUser error: ', err);
    }
  }, [getApiUser, setUser]);

  React.useEffect(() => {
    if (!isAuth.current) {
      getUser();
    }
  }, [getUser]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
