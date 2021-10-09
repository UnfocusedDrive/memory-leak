import React from 'react';
import './Progress.scss';

export default class Progress extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="nurvus progress" />
    );
  }
}