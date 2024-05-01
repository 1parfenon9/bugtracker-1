import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.item}>
      <nav className={style.nav}>
        <div className={style.link}>
          <Link to="/">Главная</Link>
        </div>
        <div>
          <Link to="/create">Создать задачу</Link>
        </div>
      </nav>
      <div className={style.menu}>
        <div>
          <Link to="/signin">Войти</Link>
        </div>
        <div>
          <Link to="/signup">Создать аккаунт</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
