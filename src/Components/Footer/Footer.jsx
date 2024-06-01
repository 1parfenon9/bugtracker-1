import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link to="/main" className={styles.footer__brand}>
          Главная
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
