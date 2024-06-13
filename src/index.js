console.log('ruunning succesfully!!!!!!!');
import './style.css';
import Home from './home.js';
import About from './about.js';


function pageLoad(){
    const content = document.querySelector('#content');
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');

    const current = home.textContent;


    content.appendChild(Home());



}

pageLoad();