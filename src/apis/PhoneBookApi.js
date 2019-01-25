import axios from 'axios';
import { GROUPS_URL } from './RestUtils';
import { USERS_URL } from './RestUtils';
import cookieUtils from './CookieUtils';

class PhoneBookApi {
  getUsers(success) {
    var config = {
        headers: {'Authorization': cookieUtils.getAuthHeader()}
    };

    var url = USERS_URL
    return axios.get(url, config).then(
        (response) => {
          var usersData = response.data
          success(usersData)
        },
        (err) => {
          console.log(err);
        }
    )
  }

  addEmployee(full_name, mobile, email) {
    var config = {
        headers: {'Authorization': cookieUtils.getAuthHeader()}
    };

    var params = {
       "full_name": full_name,
       "mobile": mobile,
       "email": email
    }

    var url = USERS_URL
    return axios.post(url, params, config).then(
        (response) => {
            success()
        },
        (err) => {
            console.log(err);
        }
    )
  }

  getGroups(success) {
    var config = {
        headers: {'Authorization': cookieUtils.getAuthHeader()}
    };

    var url = GROUPS_URL
    return axios.get(url, config).then(
        (response) => {
          var groupsData = response.data
          success(groupsData)
        },
        (err) => {
          console.log(err);
        }
    )
  }
}

const instance = new PhoneBookApi();
Object.freeze(instance);

export default instance;
