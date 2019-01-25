import React from 'react';

class LocationElement extends React.Component {
  render() {
    let showLocation = this.props.showLocation
    let locations = this.props.locations
    let activeLocation = this.props.activeLocation
    let locationUI = (
      <li className="dropdown" style={{display: showLocation ? "" : "none"}}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="user-setting">
                  <span className="user-dd">Location: {activeLocation}</span>
                  <span className="ic-down-arrow"></span>
              </span>
          </a>
          <ul className="dropdown-menu">
              {locations}
          </ul>
      </li>
    )
    return (
      locationUI
  	);
  }
}

export default LocationElement;
