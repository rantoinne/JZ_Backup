import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/ProfileActions';
import Loader from '../components/Loader';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getProfile()
  }
  render() {
    let profile;
    if(this.props.profileData) {
      profile = this.props.profileData
    }
  	return (
      !this.props.profileData ? <Loader title='Getting Profile' /> :
      <div id="content-wrapper">
        <h3>
  	      Mobile: {profile.mobile}
  	    </h3>
      </div>
  	);
  }
}

const mapDispatchToProps = dispatch => ({getProfile: () => dispatch(fetchProfile())})

function mapStateToProps(state){
	return {
		profileData: state.profileReducer.profileData
	};
}

Profile.propTypes = {
		profileData: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
