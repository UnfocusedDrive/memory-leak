import React, { useState, useEffect, useCallback } from 'react';
import './StarsBG.css';

/**
 * credit: https://codepen.io/saransh/pen/BKJun
 */
export default function StarsBG(props) {
  const { title, description } = props;

  return (
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
  );
}