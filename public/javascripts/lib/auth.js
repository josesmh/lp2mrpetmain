function isAuthenticated() {
    if (!getToken()) {
      window.location.href = '/login.ejs';
    } else {
      return true;
    }
  }
  
  function getToken() {
    return localStorage.getItem('@mrpet:token');
  }
  
  function signin(token) {
    localStorage.setItem('@mrpet:token', token);
  
    window.location.href = '/index.ejs';
  }
  
  function signout() {
    localStorage.removeItem('@mrpet:token');
  
    window.location.href = '/login.ejs';
  }
  
  export default { isAuthenticated, getToken, signin, signout };