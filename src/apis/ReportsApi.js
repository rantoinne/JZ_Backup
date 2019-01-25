import axios from 'axios';
import { VISITORS_REPORTS_SEARCH } from './RestUtils';
import cookieUtils from './CookieUtils';

class ReportsApi {
  visitorReportsSearchApi(query, success) {
      var config = {
          headers: {'Authorization': cookieUtils.getAuthHeader()}
      };

      var params = {
         "type": "Time",
         "query": query
      }

      var url = VISITORS_REPORTS_SEARCH
      return axios.post(url, params, config).then(
          (response) => {
              var visitorsArr = response.data
              success(visitorsArr)
          },
          (err) => {
              console.log(err);
          }
      )
  }
}

const instance = new ReportsApi();
Object.freeze(instance);

export default instance;
