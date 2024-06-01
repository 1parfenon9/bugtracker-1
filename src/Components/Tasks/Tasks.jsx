import React, { useEffect, useState } from 'react';
import style from './Tasks.module.css';
import axios from 'axios';
import Task from '../Task/Task';

const Tasks = () => {
  // let tasks = [
  //   { id: 1, name: 'id-2', title: 'Название', tag: 'Нефтяник', status: 'В работе', priority: 'Выосикй' }
  // ];
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://66326961c51e14d6956460bd.mockapi.io/tasks')
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  useEffect(() => {
    setTaskCount(tasks.length);
  }, [tasks]);

  const getNounEnding = () => {
    return count > 1 ? 'задач' : 'задача';
  };
  const count = tasks.length;
  const heading = 'Найдено: ' + count + ' ' + getNounEnding();

  if (tasks.length > 0)
    return (
      <div className={style.item}>
        <h1>Список ({taskCount})</h1>
        <input
          className={style.input}
          type="text"
          id="search"
          placeholder="Введите название"
        />
        <p>{heading}</p>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    );
  else return <h3>Ничего нет</h3>;
};

export default Tasks;
