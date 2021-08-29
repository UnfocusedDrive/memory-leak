import React, { useState, useEffect, useCallback } from 'react';
import Color from './Color.jsx';
import Layout from './Layout.jsx';

export default function Modal(props) {
  const { children, onChange } = props;


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
      className="desktop-only"
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
      { children }
    </div>
  );
}