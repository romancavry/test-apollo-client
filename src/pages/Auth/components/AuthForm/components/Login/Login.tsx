import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { LOGIN } from 'modules/auth/mutations';
import { saveToken } from 'modules/auth';
import { useAuth } from 'modules/auth/hooks';

import { Wrapper } from '../../styled';

const Login = () => {
  const [login] = useMutation(LOGIN);

  const navigate = useNavigate();

  const { setUser } = useAuth();

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
          login: { token, user },
        },
      } = result;

      saveToken(token);
      setUser(user);

      navigate('/chat', { replace: true });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Login onSubmit err: ', err);
    }
  }, [login, navigate, setUser, values]);

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
