import API from './lib/auth.js';
console.log("signin.js loaded");



window.handleSubmit = handleSubmit;

const form = document.querySelector('form');

async function handleSubmit(event) {
  console.log("Form submitted");
  event.preventDefault();

  const user = Object.fromEntries(new FormData(form));

  const config = {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/login', config);

  const { auth, token } = await response.json();

  if (auth) {
    API.signin(token);
    window.location.href = '/';
  } else {
    console.log('Erro no login');
  }
}




