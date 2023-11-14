import React, { FormEvent } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <h3 className={styles.formTitle}>LOGIN</h3>
      <label>
        Login
        <input type="text" id={'login'} />
      </label>
      <label>
        Password
        <input type="password" id={'pass'} />
      </label>
      <button type="submit" className={styles.submitBtn}>
        Login
      </button>
    </form>
  );
};

export default AuthForm;