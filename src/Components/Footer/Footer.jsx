import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div >
      <div className={style.footer}>
        {/* <Link to="/">
          <p className={style.link}>BugTracker</p>
        </Link> */}
      </div>
    </div>
  );
};

export default Footer;
