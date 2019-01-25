import React from 'react';

class PurposeElement extends React.Component {
  render() {
    let purposes = this.props.purposes
    let showPurpose = (this.props.showPurpose) ? true : false
    let activePurpose = this.props.activePurpose
    let purposeUI = (
      <li className="dropdown" style={{display: showPurpose ? "" : "none"}}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="user-setting">
                  <span className="user-dd">Purpose: {activePurpose}</span>
                  <span className="ic-down-arrow"></span>
              </span>
          </a>
          <ul className="dropdown-menu">
              {purposes}
          </ul>
      </li>
    )
    return (
      purposeUI
  	);
  }
}

export default PurposeElement;
