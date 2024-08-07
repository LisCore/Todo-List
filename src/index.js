import './styles/styles-template.css';
import { homeOnLoad } from './modules/home.js';
import { navbar } from './modules/navbar.js';
import { addContent } from './util/addContent.js';
// import { addItem } from './modules/addItem.js';

const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", function() {
    body.appendChild(navbar());
    body.appendChild(homeOnLoad());
});

