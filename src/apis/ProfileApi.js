import axios from 'axios';
import { PROFILE_URL } from './RestUtils';
import cookieUtils from './CookieUtils';

class ProfileApi {
  getProfile(success) {
    var config = {
        headers: {'Authorization': cookieUtils.getAuthHeader()}
    };

    var url = PROFILE_URL
    return axios.get(url, config).then(
        (response) => {
          var profileData = response.data
          success(profileData)
        },
        (err) => {
          console.log(err);
        }
    )
  }
}

const instance = new ProfileApi();
Object.freeze(instance);

export default instance;
