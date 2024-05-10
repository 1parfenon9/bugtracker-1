import React, { useState } from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className={style.item}>
      {isLoggedIn ? (
        <nav className={style.nav}>
          <div className={style.link}>
            <Link exact to="/main">
              Главная
            </Link>
          </div>
          <div>
            <Link exact to="/create">
              Создать задачу
            </Link>
          </div>
          <div>
            <Link onClick={handleLogOut} to="/login">
              Выйти
            </Link>
          </div>
        </nav>
      ) : (
        <div className={style.menu}>
          <div>
            <Link to="/login">Войти</Link>
          </div>
          <div>
            <Link to="/registration">Создать аккаунт</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
