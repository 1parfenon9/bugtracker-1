import React from 'react';
import style from './Create.module.css';

const Create = () => {
  return (
    <div>
      <h1>Создать задачу</h1>
      <form className={style.form}>
        <div className={style.title}>
          <label className={style.label}>
            <div>
              <font>Название:</font>
            </div>
            <input type="text" className={style.input} required />
          </label>
        </div>
        <div className={style.title}>
          <label className={style.label}>
            <div>
              <font>Описание:</font>
            </div>
            <textarea className={style.input} required></textarea>
          </label>
        </div>
        <div className={style.title}>
          <label className={style.label}>
            <div>
              <font>Тег</font>
            </div>
            <input type="text" className={style.input} required />
          </label>
        </div>
        <div className={style.title}>
          <label className={style.label}>
            <div>
              <font>Приоритет</font>
            </div>
            <input type="text" className={style.input} required />
          </label>
        </div>

        <div className={style.title}>
          <label className={style.label}>
            <div>
              <font>Статус</font>
            </div>
          </label>
        </div>

        <button type="submit" className={style.button}>
          Создать
        </button>
      </form>
    </div>
  );
};

export default Create;
