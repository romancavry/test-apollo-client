import * as React from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from 'modules/auth/mutations';
import { saveToken } from 'modules/auth';

import { Wrapper } from '../../styled';

const Login = () => {
  const [login] = useMutation(LOGIN);

  const [values, setValues] = React.useState({
    name: 'sdfs',
    email: 'sdfs',
    password: 'sdfs',
  });

  const onChangeInput = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      setValues({
        ...values,
        [name]: value,
      });
    },
    [values],
  );

  const onSubmit = React.useCallback(async () => {
    try {
      const { email, password } = values;

      const result = await login({
        variables: {
          email,
          password,
        },
      });

      const {
        data: {
          login: { token },
        },
      } = result;

      saveToken(token);
      window.location.reload();
    } catch (err) {
      console.log('Login err: ', err);
    }
  }, [login, values]);

  return (
    <Wrapper>
      <h3>LOGIN</h3>

      <label>
        Email
        <input value={values.email} onChange={onChangeInput} name='email' />
      </label>

      <label>
        Password
        <input
          value={values.password}
          onChange={onChangeInput}
          name='password'
        />
      </label>

      <button type='button' onClick={onSubmit}>
        Login
      </button>
    </Wrapper>
  );
};

export default Login;
