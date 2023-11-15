import React, { FC } from 'react';
import styles from './AuthForm.module.css';
import { LoginFormData } from '../../pages/AuthPage/AuthPage';

interface AuthFormProps {
  authUser: (data: LoginFormData) => void;
}

type FormFields = {
  login: HTMLInputElement;
  password: HTMLInputElement;
  rememberMe: HTMLInputElement;
};

const AuthForm: FC<AuthFormProps> = ({ authUser }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    e
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { login, password, rememberMe } = form;

    authUser({
      login: login.value,
      password: password.value,
      rememberMe: rememberMe.checked,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>LOGIN</h3>
      <label>
        Login
        <input type="text" name={'login'} required />
      </label>
      <label>
        Password
        <input type="password" name={'password'} required />
      </label>
      <label className={styles.checkbox}>
        Remember Me
        <input type="checkbox" name={'rememberMe'} />
      </label>
      <button type="submit" className={styles.submitBtn}>
        Login
      </button>
    </form>
  );
};

export default AuthForm;