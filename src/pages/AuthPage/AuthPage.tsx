import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { fetchMock } from '../../API/AuthUser';

export type LoginFormData = {
  login: string;
  password: string;
  rememberMe: boolean;
};
const AuthPage = () => {
  const [load, setLoad] = useState(false);
  const authUser = async (formData: LoginFormData) => {
    console.log(formData);
    await fetchMock(formData).then((res) => console.log(res.json()));
  };

  return (
    <div className={'_container'}>
      <AuthForm authUser={authUser} />
    </div>
  );
};

export default AuthPage;