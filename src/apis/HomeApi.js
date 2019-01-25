import uuid from 'uuid';
import axios from 'axios';
import { LOGIN_URL, RESET_PASSWORD_URL, FORGOT_PASSWORD_URL } from './RestUtils';
import commons from '../utils/Commons';
import cookieUtils from './CookieUtils';

class HomeApi {
  loginApi(username, password, success, failure) {
    var params = {
       "email": username,
       "password": password
    }

    var url = LOGIN_URL
    axios.post(url, params).then(
        (response) => {
            if (response.status===200) {
              cookieUtils.setAuthHeader(commons.basicAuth(username, password))
              cookieUtils.setName(response.data['full_name'])
              success(response)
            } else {
              failure("Username or password not correct.")
            }
        },
        (err) => {
            console.log(err);
            failure("Something went wrong.")
        }
    )
  }

  resetPasswordApi(token, password, success, failure) {
    var params = {
       "token": token,
       "password": password
    }

    var url = RESET_PASSWORD_URL
    axios.post(url, params).then(
        (response) => {
            if (response.status===200) {
              success(response)
            } else {
              failure("Something went wrong.")
            }
        },
        (err) => {
            console.log(err);
            failure("Something went wrong.")
        }
    )
  }

  forgotPasswordApi(email, success, failure) {
    var params = {
       "email": email
    }

    var url = FORGOT_PASSWORD_URL
    axios.post(url, params).then(
        (response) => {
            if (response.status===200) {
              success(response)
            } else {
              failure("Email not valid.")
            }
        },
        (err) => {
            console.log(err);
            failure("Something went wrong.")
        }
    )
  }
}

const instance = new HomeApi();
Object.freeze(instance);

export default instance;
