import React, { useState } from 'react';
import style from './Autorization.module.css';

const Authorization = (setIsLoggedIn) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@mail.ru' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Неверный логин или пароль!');
    }
  };
  return (
    <div>
      <h1>Войти на сайт</h1>
      <form className={style.form} onSubmit={handleLogin}>
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
              // onChange={(e) => setEmail(e.target.value)}
              value={email}
              onChange={handleEmailChange}
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
              // onChange={(e) => setPassword(e.target.value)}
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className={style.button}
          // onClick={() => setIsLoggedIn(true)}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Authorization;
