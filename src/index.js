
import './style.css';
import Home from './home.js';
import About from './about.js';
import Menu from './menu.js';

function pageLoad(){
    const content = document.querySelector('#content');
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');


    content.appendChild(Home());

    home.addEventListener('click',()=>{
        content.removeChild(content.lastChild);
        content.appendChild(Home());
    })

    menu.addEventListener('click',()=>{
        content.removeChild(content.lastChild);
        content.appendChild(Menu());
    })


    about.addEventListener('click',()=>{
        content.removeChild(content.lastChild);
        content.appendChild(About());
    })
}

pageLoad();