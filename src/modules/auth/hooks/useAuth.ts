import * as React from 'react';
import { useMutation } from '@apollo/client';

import { VERIFY_TOKEN } from 'modules/auth';

const useAuth = () => {
  const token: string = JSON.parse(localStorage.getItem('MY_JWT'));

  const [ verifyToken ] = useMutation(VERIFY_TOKEN);

  const verify = React.useCallback(async () => {
    const result = await verifyToken({
      variables: {
        token
      }
    })

    return result;
  }, [token, verifyToken]);

  const isAuth = React.useMemo(() => {
    if (!token) {
      return false;
    }

    verify();
  }, [verifyToken]);

  return { isAuth };
};

export default useAuth;
