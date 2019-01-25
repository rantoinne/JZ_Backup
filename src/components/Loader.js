import React from 'react';

class Loader extends React.Component {
  render() {
    let title = this.props.title
  	return (
      <div className="loader"></div>
  	);
  }
}

Loader.propTypes = {
    title: React.PropTypes.string
}

export default Loader;
