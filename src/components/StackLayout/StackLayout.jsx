import React from 'react';
// import './Progress.scss';

export default class StackLayout extends React.Component {
  render() {
    // const { children } = this.props;

    return (
      <div className="nurvus stack-layout" { ...this.props } />
    );
  }
}