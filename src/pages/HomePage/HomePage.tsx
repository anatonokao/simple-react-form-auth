import React from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.container + ' ' + '_container'}>
      <Link to="/auth" className={styles.link}>
        Open Auth Page
      </Link>
    </div>
  );
};

export default HomePage;