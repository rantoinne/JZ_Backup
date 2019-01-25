import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import cookieUtils from '../apis/CookieUtils'

class Header extends React.Component {
  doLogout() {
    this.props.logoutCallback();
  }
  render() {
    let username = cookieUtils.getName()
    let headerContent = (
        <div id="navbar-wrapper">
      	<nav className="navbar navbar-fixed-top box-shadow-sm">
      		<div className="container-fluid">
      			<div className="navbar-header">
      				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
      				 aria-expanded="false">
      					<span className="sr-only">Toggle navigation</span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      				</button>
      				<a className="navbar-brand" href="/">
      					<img alt="JustZaap" src="public/images/jz-logo.png" height="35" />
      				</a>
      			</div>

      			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      				<ul className="nav navbar-nav navbar-right">
      					<li className="hide">
      						<a href="#">
      							<i className="ic-notification"></i>
      						</a>
      					</li>
      					<li className="hide">
      						<a href="#">
      							<i className="ic-help"></i>
      						</a>
      					</li>
      					<li className="dropdown">
      						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      							<i className="ic-user"></i>
      							<span className="user-setting">
      								<span className="user-dd">{username}</span>
      								<span className="caret"></span>
      							</span>
      						</a>
      						<ul className="dropdown-menu">
      							<li>
      								<a href="/profile">Profile</a>
      							</li>
      							<li role="separator" className="divider"></li>
      							<li>
      								<a onClick={this.doLogout.bind(this)}>Signout</a>
      							</li>
      						</ul>
      					</li>
      				</ul>
      			</div>
      		</div>
      	</nav>
      </div>
    );
  	return (
      headerContent
  	);
  }
}

export default Header;
