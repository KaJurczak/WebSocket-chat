// Reference
const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-section__list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

// Global variables
let userName;

// Forms
function login(event) {
  event.preventDefault();
  if(userNameInput.value == '' || userNameInput.value == undefined){
    alert('Please, type Your name')
  } else {
    userName = userNameInput.value; //im not sure is this right place
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
  } 
};

loginForm.addEventListener('submit', login);

