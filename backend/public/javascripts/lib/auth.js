function isAuthenticated() {
  if (!getToken()) {
    window.location.href = '/login';
  } else {
    return true;
  }
}

function getToken() {
  return localStorage.getItem('token');
}

function signin(token) {
  
  localStorage.setItem('token', token);
  window.location.href = '/index';
}

function signout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

export default { isAuthenticated, getToken, signin, signout };