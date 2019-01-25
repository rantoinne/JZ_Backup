import React from 'react';

class Todo extends React.Component {
  render() {
    let title = this.props.title
  	return (
      <div id="content-wrapper">
        <h3>{title}</h3>
      </div>
  	);
  }
}

Todo.propTypes = {
    title: React.PropTypes.string
}

export default Todo;
