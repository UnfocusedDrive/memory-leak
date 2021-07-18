import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import TasksList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const getTasks = useCallback(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(setTasks);
  });

  useEffect(() => {
    getTasks();
  }, []);

  const clickAddTask = event => {
    event.preventDefault();

    fetch('/api/tasks/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTaskTitle }),
    }).then(() => {
      setNewTaskTitle('');
      getTasks();
    });
  };

  /**
   * credit: https://codepen.io/saransh/pen/BKJun
   */
  return (
    <div className="">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
        <span>
          memoryleak.ai
        </span>
        <br />
        <br />
        <span>
          YOU ARE NOT PREPARED
        </span>
      </div>
    </div>
  );
};

export default App;
