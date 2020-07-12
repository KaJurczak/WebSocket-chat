// Reference
const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

const socket = io();

// Global variables
let userName;

// Forms
function login(event) {
  event.preventDefault();
  if(userNameInput.value == '' || userNameInput.value == undefined){
    alert('Please, type Your name')
  } else {
    userName = userNameInput.value; //im not sure is this right place (inside function?)
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
  };
};

function addMessage(author, content) {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if(author == userName){
    message.classList.add('message--self');
  };
  message.innerHTML = 
    `<h3 class="message__author">
      ${author == userName ? 'You' : author}
    </h3>
    <div class="message__content">
      ${content}
    </div>`;
  messagesList.appendChild(message);
};

function sendMessage(event) {
  event.preventDefault();

  let messageContent = messageContentInput.value;
  if(!messageContent.length){
    alert('You didn\'t write anything')
  } else {
    addMessage(userName, messageContent);
    socket.emit('message', { author: userName, content: messageContent })
    messageContentInput.value = '';
  };
};

loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage);

socket.on('message', ({ author, content }) => addMessage(author, content)); //the same: socket.on('message', (event) => addMessage(event.author, event.content))
