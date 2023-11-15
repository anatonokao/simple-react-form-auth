import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { fetchMock, Response } from '../../API/AuthUser';

export type LoginFormData = {
  login: string;
  password: string;
  rememberMe: boolean;
};
const AuthPage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const authUser = async (formData: LoginFormData) => {
    setIsLoad(true);
    setIsAuth(false);
    await fetchMock(formData)
      .then((res): Response => {
        return res.json() as Response;
      })
      .then((res) => {
        if (res.code === 202) setIsAuth(true);
        console.log(res);
        setIsLoad(false);
      });
  };

  return (
    <div className={'_container'}>
      <AuthForm authUser={authUser} isAuth={isAuth} isLoad={isLoad} />
    </div>
  );
};

export default AuthPage;