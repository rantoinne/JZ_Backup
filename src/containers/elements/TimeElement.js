import React from 'react';

class TimeElement extends React.Component {
  render() {
    let showTime = this.props.showTime
    let times = this.props.times
    let activeTime = this.props.activeTime
    let timeUI = (
      <li className="dropdown" style={{display: showTime ? "" : "none"}}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="user-setting">
                  <span className="user-dd">Time: {activeTime}</span>
                  <span className="ic-down-arrow"></span>
              </span>
          </a>
          <ul className="dropdown-menu">
              {times}
          </ul>
      </li>
    )
    return (
      timeUI
  	);
  }
}

export default TimeElement;
