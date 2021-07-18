import React, { useState, useEffect, useCallback } from 'react';
import './Layout.css';

export default function Layout(props) {
  // const { children } = props;
  // console.log('Layout', props);

  // const spaceEm = (els) => {
  //   return els.map(el => {
  //     return React.createElement('div', el);
  //   });
  // };

  return (
    <div className="ns-layout" { ...props } />
  );
}