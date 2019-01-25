import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Group from './Group';
import SubHeader from './SubHeader';
import Loader from '../components/Loader';
import { fetchGroups } from '../actions/PhoneBookActions';

class Groups extends React.Component {
  constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.fetchGroups()
	}
  render() {
    let count;
    let groups;
    if(this.props.groups.groupsData) {
      count = this.props.groups.groupsData.length
			groups = this.props.groups.groupsData.map(group => {
				return (
					<Group key={uuid.v4()} group={group} />
				);
			})
		}
  	return ( !this.props.groups.groupsData ? <Loader title='Groups' /> :
      <div id="content-wrapper">
        <SubHeader
          title="Groups" />
        <br />
        <div id="content-container" className="box-shadow-sm">
            {groups}
        </div>
    </div>
  	);
  }
}

const mapDispatchToProps = dispatch => ({fetchGroups: () => dispatch(fetchGroups())})

function mapStateToProps(state){
	return {
		groups: state.phoneBookReducer
	};
}

Groups.propTypes = {
		groups: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
