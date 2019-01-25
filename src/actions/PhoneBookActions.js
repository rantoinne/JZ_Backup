import { START_GET_USERS, END_GET_USERS, START_GET_GROUPS, END_GET_GROUPS } from './ActionTypes';
import phoneBookApi from '../apis/PhoneBookApi';

export function startGetUsers() {
    return {
        type : START_GET_USERS
    }
}

export function endGetUsers(usersArray) {
    return {
        type : END_GET_USERS,
        usersArray
    }
}

export function startGetGroups() {
    return {
        type : START_GET_GROUPS
    }
}

export function endGetGroups(groupsArray) {
    return {
        type : END_GET_GROUPS,
        groupsArray
    }
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(startGetUsers())
    return phoneBookApi.getUsers(function(usersArr){
      dispatch(endGetUsers(usersArr))
    });
  }
}

export function fetchGroups() {
  return (dispatch) => {
    dispatch(startGetGroups())
    return phoneBookApi.getGroups(function(groupsArr){
      dispatch(endGetGroups(groupsArr))
    });
  }
}
