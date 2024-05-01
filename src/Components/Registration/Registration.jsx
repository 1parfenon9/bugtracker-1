import React from 'react';
import style from './Registration.module.css';

const Registration = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <form className={style.form}>
        <div className={style.title}>
          <label for="first_name" className={style.label}>
            <div>
              <font>Имя:</font>
            </div>
            <input
              type="text"
              id="first_name"
              className={style.input}
              required
            />
          </label>
        </div>
        <div className={style.title}>
          <label for="last_name" className={style.label}>
            <div>
              <font>Фамилия:</font>
            </div>
            <input
              type="text"
              id="last_name"
              className={style.input}
              required
            />
          </label>
        </div>
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
          Создать аккаунт
        </button>
      </form>
    </div>
  );
};

export default Registration;
