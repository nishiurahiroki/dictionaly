import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <label className="headerText">{this.props.text}</label>
      </header>
    )
  }
}
