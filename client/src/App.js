import React, { useState, useEffect, useCallback } from 'react';
import  StarsBG from './components/StarsBG.jsx';
import  Modal from './components/Modal.jsx';
import  Color from './components/Color.jsx';
import  Layout from './components/Layout.jsx';
import './DarkPortal.css';
import './App.css';
// import Gear from './iconmonstr-gear-10.svg';

import TasksList from './components/TaskList';
// https://iconmonstr.com/gear-10-svg/
const GearIcon = (props) => {
  return (
    <svg  {...props } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12.645v-2.289c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.374-1.017-1.117-1.431-2.281h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333z"/></svg>
  );
}

const ColorPicker = (props) => {
  const { onChange } = props;

  const colors = [
    'blue',
    'red',
    'green'
  ].map(color => <Color onClick={ () => onChange(color) } color={ color } />);

  return (
    <Layout className="mobile-only" style={{
      position: 'absolute',
      bottom: 30,
      justifyContent: 'center',
      width: '100%'
    }}>
      { colors }
    </Layout>
  );
};


const App = (props) => {
  const [tokens, setTokens] = useState(props.tokens);
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




  const domRoot = document.querySelector(':root');
  Object.keys(tokens).forEach(key => domRoot.style.setProperty(key, tokens[key]));



  console.log('app');

  return (
    <div className="">
      <div id='title'>
        <span>
          memoryleak.ai
        </span>
        <br />
        <br />
        <span>
        YOU ARE NOT PREPARED
        </span>
        <br />
        <span style={{display: 'none'}}>
        こんにちは
        </span>
      </div>
      <ColorPicker
        onChange={
          value => {
            setTokens({
              ...tokens,
              '--inner': value
            })
          }
        }
      />
      <StarsBG />
      <GearIcon className="desktop-only" fill="#a5acb4" />
      <Modal>
        <ColorPicker
          onChange={
            value => {
              setTokens({
                ...tokens,
                '--inner': value
              })
            }
          }
        />
      </Modal>
    </div>
  );
};

export default App;
