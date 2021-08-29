import React, { useState, useEffect, useCallback } from 'react';

export default function Color(props) {
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