import React from 'react';

class DoorElement extends React.Component {
  render() {
    let showDoors = this.props.showDoors
    let doorsUI = (
      <li className="dropdown" style={{display: showDoors ? "" : "none"}}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="user-setting">
                  <span className="user-dd">All Doors</span>
                  <span className="ic-down-arrow"></span>
              </span>
          </a>
          <ul className="dropdown-menu">
              <li>
                  <a href="#">Profile</a>
              </li>
          </ul>
      </li>
    )
    return (
      doorsUI
  	);
  }
}

export default DoorElement;
