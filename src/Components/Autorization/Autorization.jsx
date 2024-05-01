import React from 'react';
import style from './Autorization.module.css';

const Authorization = () => {
  return (
    <div>
      <h1>Войти на сайт</h1>
      <form className={style.form}>
        <div className={style.title}>
          <label for="email" className={style.label}>
            <div>
              <font>Электронная почта:</font>
            </div>
            <input
              type="email"
              placeholder="me@example.com"
              className={style.input}
              id="email"
              required
            />
          </label>
        </div>
        <div className={style.title}>
          <label for="password" className={style.label}>
            <div>
              <font>Пароль:</font>
            </div>
            <input
              type="password"
              placeholder="********"
              className={style.input}
              id="password"
              required
            />
          </label>
        </div>

        <button type="submit" className={style.button}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Authorization;
