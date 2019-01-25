import React from 'react';
import VisitorsList from '../containers/VisitorsList';

class DashBoard extends React.Component {
  render() {
  	return (
      <div id="content-wrapper">
        <VisitorsList />
      </div>
  	);
  }
}

export default DashBoard;
