import React from 'react';

class Group extends React.Component {
  render() {
    let group = this.props.group;
  	return (
      <div>
        <div className="row group-details">
            <div className="col-md-6 pad-x">
                <i className="ic-usergroup"></i>
                <div className="d-inline-block group-name">
                    <h4>{group.name}</h4>
                    <p className="mar-t-5 app-muted-text">{group.count} Members</p>
                </div>
            </div>
        </div>
        <hr></hr>
      </div>
  	);
  }
}

export default Group;
