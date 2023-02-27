import * as React from 'react';
import { Wrapper } from './styled';

const AuthForm = () => {
  const [values, setValues] = React.useState({
    login: '',
    password: '',
  })

  const onChangeInput = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  }, [])

  return (
    <Wrapper>
      <div>
        <label>Login</label>
        <input value={values.login} onChange={onChangeInput} />
      </div>
    </Wrapper>
  )
};

export default AuthForm;
