import * as React from 'react';
import { Wrapper } from './styled';

const AuthForm = () => {
  const [values, setValues] = React.useState({
    login: '',
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

  return (
    <Wrapper>
      <div>
        <label>
          Login
          <input value={values.login} onChange={onChangeInput} name='login' />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChangeInput}
            name='password'
          />
        </label>
      </div>
    </Wrapper>
  );
};

export default AuthForm;
