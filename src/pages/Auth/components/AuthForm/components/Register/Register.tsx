import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { SIGNUP } from 'modules/auth/mutations';
import { saveToken } from 'modules/auth';
import { useAuth } from 'modules/auth/hooks';

import { Wrapper } from '../../styled';

const Register = () => {
  const [signup] = useMutation(SIGNUP);

  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
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
      const { name, email, password } = values;

      const result = await signup({
        variables: {
          name,
          email,
          password,
        },
      });

      const {
        data: {
          signup: { token, user },
        },
      } = result;

      saveToken(token);
      setUser(user);

      navigate('/chat', { replace: true });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Register onSubmit err: ', err);
    }
  }, [navigate, setUser, signup, values]);

  return (
    <Wrapper>
      <h3>REGISTER</h3>

      <label>
        Name
        <input value={values.name} onChange={onChangeInput} name='name' />
      </label>

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
        Register
      </button>
    </Wrapper>
  );
};

export default Register;
