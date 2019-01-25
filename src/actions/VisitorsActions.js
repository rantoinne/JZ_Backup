import { START_VISITORS_SEARCH, END_VISITORS_SEARCH } from './ActionTypes';
import reportsApi from '../apis/ReportsApi';

export function startVisitorsSearch() {
    return {
        type : START_VISITORS_SEARCH
    }
}

export function endVisitorsSearch(visitorsArray) {
    return {
        type : END_VISITORS_SEARCH,
        visitorsArray
    }
}

export function fetchVisitors(query) {
  return (dispatch) => {
    dispatch(startVisitorsSearch())
    return reportsApi.visitorReportsSearchApi(query, function(visitorsArr){
      visitorsArr.sort(function(a,b){
        return b.start_time-a.start_time
      })
      dispatch(endVisitorsSearch(visitorsArr))
    });
  }
}
