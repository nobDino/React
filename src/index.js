import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import Toggle from './chapter_07/Toggle';
// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// import Head from './Homework01/Head';
// import Login from './Homework01/Login';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
// import Counter from'./chapter_06/Counter';
// import Color from'./chapter_06/Color';
// import LoginControl from './chapter_07/LoginControl';
// import LandingPage from './chapter_07/LandingPage';
// import Rollbook from './chapter_07/Rollbook';
// import NameForm from './chapter_07/NameForm';
//  import Move from './chapter_07/Move';
// import Text from './Text/Text';
// import Gugudan from './chapter_07/Gugudan';
// import Blocks from './chapter_13/Bloks';
import FetchGet from './chapter_14/FetchGet';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
root.render(
    <FetchGet/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
