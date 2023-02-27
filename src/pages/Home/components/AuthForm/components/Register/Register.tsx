import * as React from 'react';
import { useMutation } from '@apollo/client';

import { SIGNUP } from 'modules/auth/mutations';
import { saveToken } from 'modules/auth';

import { Wrapper } from '../../styled';

const Register = () => {
  const [signup] = useMutation(SIGNUP);

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
          signup: { token },
        },
      } = result;

      console.log('Register token: ', token);
      saveToken(token);
    } catch (err) {
      console.log('Register err: ', err);
    }
  }, [signup, values]);

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
        Login
      </button>
    </Wrapper>
  );
};

export default Register;
