import React, { FC } from 'react';
import styles from './AuthForm.module.css';
import { LoginFormData } from '../../pages/AuthPage/AuthPage';
import loading from '../../assets/Loading.gif';

interface AuthFormProps {
  authUser: (data: LoginFormData) => void;
  isAuth: boolean;
  isLoad: boolean;
}

type FormFields = {
  login: HTMLInputElement;
  password: HTMLInputElement;
  rememberMe: HTMLInputElement;
};

const AuthForm: FC<AuthFormProps> = ({ authUser, isAuth, isLoad }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    e
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    e.currentTarget.reset();
    const { login, password, rememberMe } = form;

    authUser({
      login: login.value,
      password: password.value,
      rememberMe: rememberMe.checked,
    });
  };

  return (
    <div className={styles.container}>
      <form
        className={
          !isLoad ? styles.form : styles.form + ' ' + styles.formInactive
        }
        onSubmit={handleSubmit}
      >
        <h3 className={styles.formTitle}>LOGIN</h3>
        <label>
          Login
          <input type="text" name={'login'} required disabled={isLoad} />
        </label>
        <label>
          Password
          <input type="password" name={'password'} required disabled={isLoad} />
        </label>
        <label className={styles.checkbox}>
          Remember Me
          <input type="checkbox" name={'rememberMe'} />
        </label>
        <button type="submit" className={styles.submitBtn} disabled={isLoad}>
          Login
        </button>
      </form>
      {isLoad && <img src={loading} alt="loading" className={styles.loading} />}
      {isAuth && <div className={styles.successful}>Successfully logged</div>}
    </div>
  );
};

export default AuthForm;