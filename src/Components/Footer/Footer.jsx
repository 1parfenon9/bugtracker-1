import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = ({ year }) => {
  return (
    <div className={style}>
      <footer>
        <span>BugTracker - {year}</span>
      </footer>
    </div>
  );
};

export default Footer;
