import { START_GET_PROFILE, END_GET_PROFILE } from './ActionTypes';
import profileApi from '../apis/ProfileApi';

export function startGetProfile() {
    return {
        type : START_GET_PROFILE
    }
}

export function endGetProfile(profileData) {
    return {
        type : END_GET_PROFILE,
        profileData
    }
}

export function fetchProfile() {
  return (dispatch) => {
    dispatch(startGetProfile())
    return profileApi.getProfile(function(profileData){
      dispatch(endGetProfile(profileData))
    });
  }
}
