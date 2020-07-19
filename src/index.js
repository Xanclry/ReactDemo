import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id : 1, message : 'Hello! How are you?', likeCount : 12},
    {id : 2, message : 'It\'s my first post', likeCount : 22},
    {id : 3, message : 'Wow!', likeCount : 89},
]

let dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Zahar'},
    {id: 4, name: 'Slava'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'Yo again'},
]

let data = {
    messages : messages,
    dialogs : dialogs,
    posts : posts
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
