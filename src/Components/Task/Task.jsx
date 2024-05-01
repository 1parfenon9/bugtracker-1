import React from 'react';
import style from './Task.module.css';

const Task = ({ name, title, tag, status, priority }) => {
  
  return (
    <div>
      <a className={style.link} href="#">
        <div className={style.item}>
          <div>
            <p>{name}</p>
          </div>
          <a className={style.link} href="#">
            <div className={style.box}>{tag}</div>
          </a>
          <div>
            <p>{title}</p>
          </div>
          <div>
            <p>{status}</p>
          </div>
          <div>
            <p>{priority}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Task;
