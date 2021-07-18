import React, { useState, useEffect, useCallback } from 'react';
import Layout from './Layout.jsx';

const Color = (props) => {
  const { color, ...restProps } = props;
  return (
    <div style={{
      width: 30,
      height: 30,
      background: color,
      borderRadius: '100%'
    }}
    { ...restProps }
    />
  );
}


export default function Modal(props) {
  const { onChange } = props;


  const handleClick = (value) => {
    console.log('handleClick', value, onChange);
    onChange(value);
  };

  // const colors = {
  //   colo: 'blue',
  //   color: 'red'
  // };


  return (
    <div
      style={{
        border: '1px solid rgb(33 150 243 / 30%)',
        // borderRadius: 4,
        position: 'absolute',
        padding: '30px',
        background: 'rgb(96 125 139 / 50%)',
        color: 'white',
        top: '20%',
        margin: '0 auto',
        /* width: '100%', */
        left: 0,
        width: '400px',
        right: 0
      }}
    >
      Select a background color
      <Layout>
        <Color onClick={ () => handleClick('blue') } color="blue" />
        <Color color="red" />
        <Color color="green" />
      </Layout>
    </div>
  );
}