import React from 'react';

class GroupElement extends React.Component {
  render() {
    let showGroup = this.props.showGroup
    let groupsList = this.props.groupsList
    let activeGroup = this.props.activeGroup
    let groupsUI = (
      <li className="dropdown" style={{display: showGroup ? "" : "none"}}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="user-setting">
                  <span className="user-dd">Groups: {activeGroup}</span>
                  <span className="ic-down-arrow"></span>
              </span>
          </a>
          <ul className="dropdown-menu">
              {groupsList}
          </ul>
      </li>
    )
    return (
      groupsUI
  	);
  }
}

export default GroupElement;
