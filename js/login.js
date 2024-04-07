const userForm = document.querySelector('#user-form');
const userInput = document.querySelector('#user-form input');
const userTitle = document.querySelector('#user-title');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleUserForm(event) {
  event.preventDefault();
  userForm.classList.add(HIDDEN_CLASSNAME);
  const username = userInput.value;
  userInput.value = '';
  localStorage.setItem(USERNAME_KEY, username);
  handleUserTitle(username);
}

function handleUserTitle(username) {
  userTitle.innerText = `Welcome, ${username}!`;
  userTitle.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  userForm.classList.remove(HIDDEN_CLASSNAME);
  userForm.addEventListener('submit', handleUserForm);
} else {
  handleUserTitle(savedUsername);
}
