import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Create.module.css';
import CheckBoxPriority from './CheckBoxPriority/CheckBoxPriority';

const Create = () => {
  const [priority, setPriority] = useState([]);
  useEffect(() => {
    axios
      .get('https://66326961c51e14d6956460bd.mockapi.io/priority')
      .then((res) => {
        setPriority(res.data);
      });
  }, []);
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
          <font>Проект:</font>
          <label>
            <div className={style.label}>
              {priority.map((prior) => (
                <CheckBoxPriority key={prior.id} {...prior} />
              ))}
            </div>
          </label>
        </div>

        <div className={style.title}>
          <font>Статус:</font>
          <label>
            <div className={style.label}>
              {priority.map((prior) => (
                <CheckBoxPriority key={prior.id} {...prior} />
              ))}
            </div>
          </label>
        </div>

        <div className={style.title}>
          <font>Приоритет:</font>
          <label>
            <div className={style.label}>
              {priority.map((prior) => (
                <CheckBoxPriority key={prior.id} {...prior} />
              ))}
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
