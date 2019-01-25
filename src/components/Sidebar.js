import React from 'react';
import cookieUtils from '../apis/CookieUtils';

class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeIndex: cookieUtils.getActiveIndex(),
      parentIndex: cookieUtils.getParentIndex()
    }
  }
  toggleClass(index, pindex) {
    this.setState({ activeIndex: index, parentIndex: pindex });
    cookieUtils.setActiveIndex(index)
    cookieUtils.setParentIndex(pindex)
  };
  render() {
    let sidebarContent = (
      <nav id="sidenav">
        <ul className="list-unstyled components">
          <li>
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true" className={this.state.parentIndex==0 ? 'active': null}><span className="ic-lock"></span>VMS</a>
              <ul className="list-unstyled collapse show" id="homeSubmenu" aria-expanded="true">
                  <li><a href="/visitors_activity" className={this.state.activeIndex==0 ? 'active': null} onClick={this.toggleClass.bind(this, 0, 0)}>
                    <span></span><div className="d-inline-block">Visitors Activity</div>
                  </a></li>
              </ul>
          </li>
          <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className={this.state.parentIndex==1 ? 'active': null}><span className="ic-expense"></span>Employees</a>
              <ul className="list-unstyled collapse show" id="pageSubmenu" aria-expanded="false">
                  <li><a href="/employees" className={this.state.activeIndex==1 ? 'active': null} onClick={this.toggleClass.bind(this, 1, 1)}>
                    <span></span><div className="d-inline-block">Overview</div></a>
                  </li>
                  <li><a href="/employee_groups" className={this.state.activeIndex==2 ? 'active': null} onClick={this.toggleClass.bind(this, 2, 1)}>
                    <span></span><div className="d-inline-block">Groups</div></a>
                  </li>
                  <li><a href="/employees_adduser" className={this.state.activeIndex==3 ? 'active': null} onClick={this.toggleClass.bind(this, 3, 1)}>
                    <span></span><div className="d-inline-block">Add User</div></a>
                  </li>
              </ul>
          </li>
          <li className="hide">
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="collapsed"><span className="ic-expense"></span>Expenses</a>
              <ul className="list-unstyled collapse" id="pageSubmenu" aria-expanded="false">
                  <li><a href="#"><span></span>Overview</a></li>
                  <li><a href="#"><span></span>Expense Claims</a></li>
                  <li><a href="#"><span></span>Approved Claims</a></li>
                  <li><a href="#"><span></span>Settled Claims</a></li>
                  <li><a href="#"><span></span>Configuration</a></li>
              </ul>
          </li>
          <li className="hide">
              <a href="#"><span className="ic-wallet"></span>Food Wallet</a>
          </li>
          <li className="hide">
              <a href="#"><span className="ic-offers"></span>Offers</a>
          </li>
          <li className="hide">
              <a href="#"><span className="ic-reports"></span>Reports</a>
          </li>
          <li className="hide">
              <a href="#"><span className="ic-settings"></span>Settings</a>
          </li>
        </ul>
      </nav>
    );
  	return (
      sidebarContent
  	);
  }
}

export default Sidebar;
