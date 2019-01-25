import { START_GET_PROFILE, END_GET_PROFILE } from '../actions/ActionTypes';

const profileReducer = (state={isFetching: false, profileData: {}}, action) => {
    switch(action.type){
        case START_GET_PROFILE:
            return {
                isFetching : true
            }
        break;

        case END_GET_PROFILE:
            return {
                isFetching : false,
                profileData : action.profileData
            }
        break;
        default:
            return state;
    }
}

export default profileReducer;
