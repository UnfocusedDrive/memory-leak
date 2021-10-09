import React from 'react';
import './Button.scss';

export default class Button extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <button className="nurvus button">
        { children }
      </button>
    );
  }
}