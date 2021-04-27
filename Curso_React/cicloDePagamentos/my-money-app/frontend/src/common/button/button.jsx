import React, { Component } from 'react'

export class Button extends Component {
  render() {
    <button className={`btn btn-${this.props.btnClass}`} onClick={onClick}>
      <i className={`fa fa-${this.props.iconClass}`}></i>
    </button>
  }
}
