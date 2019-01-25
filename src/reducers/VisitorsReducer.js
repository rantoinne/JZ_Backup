import { START_VISITORS_SEARCH, END_VISITORS_SEARCH } from '../actions/ActionTypes';

const visitorsReducer = (state={isFetching : false, devsArray : []}, action) => {
    switch(action.type){
        case START_VISITORS_SEARCH:
            return {
                isFetching : true
            }
        break;

        case END_VISITORS_SEARCH:
            return {
                isFetching : false,
                visitorsArray : action.visitorsArray
            }
        break;
        default:
            return state;
    }
}

export default visitorsReducer;
