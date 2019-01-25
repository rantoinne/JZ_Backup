import Cookies from 'universal-cookie';

const COOKIE_AUTH_HEADER = "jzauthheader"
const COOKIE_USERNAME = "username"
const COOKIE_ACTIVE_INDEX = "activeindex"
const COOKIE_PARENT_INDEX = "parentindex"

class CookieUtils {
  constructor() {
    this.cookies = new Cookies();
  }
  getAuthHeader() {
    return this.cookies.get(COOKIE_AUTH_HEADER);
  }

  setAuthHeader(authHeader) {
    this.cookies.set(COOKIE_AUTH_HEADER, authHeader, { path: '/' })
  }

  cleanUp() {
    this.cookies.remove(COOKIE_AUTH_HEADER)
    this.cookies.remove(COOKIE_USERNAME)
    this.cookies.remove(COOKIE_ACTIVE_INDEX)
  }

  isLoggedIn() {
    return this.cookies.get(COOKIE_AUTH_HEADER)!=undefined
  }

  setName(username) {
    this.cookies.set(COOKIE_USERNAME, username, { path: '/' })
  }

  getName() {
    return this.cookies.get(COOKIE_USERNAME)
  }

  getActiveIndex() {
    if (this.cookies.get(COOKIE_ACTIVE_INDEX)==undefined) {
      this.setActiveIndex(0);
      return 0
    } else {
      return this.cookies.get(COOKIE_ACTIVE_INDEX)
    }
  }

  setActiveIndex(index) {
    this.cookies.set(COOKIE_ACTIVE_INDEX, index, { path: '/' })
  }

  getParentIndex() {
    if (this.cookies.get(COOKIE_PARENT_INDEX)==undefined) {
      this.setParentIndex(0);
      return 0
    } else {
      return this.cookies.get(COOKIE_PARENT_INDEX)
    }
  }

  setParentIndex(index) {
    this.cookies.set(COOKIE_PARENT_INDEX, index, { path: '/' })
  }
}

const instance = new CookieUtils();
Object.freeze(instance);

export default instance;
