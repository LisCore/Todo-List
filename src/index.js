import './styles/styles-template.css';
import { homeOnLoad } from './modules/home.js';
import { navbar } from './modules/navbar.js';
import { addItem } from './modules/addItem.js';

console.log("123");
document.addEventListener("DOMContentLoaded", function() {
    // const body = document.querySelector("body");
    // let textMessage = document.createElement("h1");
    // textMessage.textContent = "Hello World!";
    // body.appendChild(textMessage);
    const body = document.querySelector("body");
    body.appendChild(navbar());
    body.appendChild(homeOnLoad());
});

document.addEventListener("click", addItem);

