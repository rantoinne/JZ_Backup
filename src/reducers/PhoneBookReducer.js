import { START_GET_USERS, END_GET_USERS, START_GET_GROUPS, END_GET_GROUPS } from '../actions/ActionTypes';

const phoneBookReducer = (state={isFetching: false, usersData: [], groupsData: []}, action) => {
    switch(action.type){
        case START_GET_USERS:
            return {
                isFetching : true
            }
        break;

        case END_GET_USERS:
            return {
                isFetching : false,
                usersData : action.usersArray
            }
        break;

        case START_GET_GROUPS:
            return {
                isFetching : true
            }
        break;

        case END_GET_GROUPS:
            return {
                isFetching : false,
                groupsData : action.groupsArray
            }
        break;

        default:
            return state;
    }
}

export default phoneBookReducer;
