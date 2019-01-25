import React from 'react';
import uuid from 'uuid';
import VisitorItem from './VisitorItem';

class VisitorGroup extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let group = this.props.group
    let date = this.props.date
		let visitors = group.map((visitor, i) => {
			return (
				<VisitorItem key={i} visitor={visitor} />
			);
		});
		return (
      <tbody>
        <tr className="tablehead">
          <th className="texttablehead"><span>{date}</span></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th className="texttablehead"><span>Total Visitors: {group.length}</span></th>
        </tr>
        {visitors}
      </tbody>
		);
  }
}

export default VisitorGroup;
