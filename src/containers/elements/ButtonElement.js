import React from 'react';
import { Redirect } from 'react-router-dom';

class ButtonElement extends React.Component {
  render() {
    let title = this.props.title
    let showButton = this.props.showButton
    let redirectUrl = this.props.redirectUrl
    let buttonUI = (
      <li style={{display: showButton ? "" : "none"}}>
        <a href={redirectUrl}><button type="submit" className="btn btn-primary btn-sm">{title}</button></a>
      </li>
    )
    return (
      buttonUI
  	);
  }
}

export default ButtonElement;
