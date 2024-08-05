import './styles/styles-template.css';
import { homeOnLoad } from './modules/home.js';
import { navbar } from './modules/navbar.js';
import { addContent } from './util/addContent.js';
import { addItem } from './modules/addItem.js';

const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", function() {
    // const body = document.querySelector("body");
    // let textMessage = document.createElement("h1");
    // textMessage.textContent = "Hello World!";
    // body.appendChild(textMessage);
    body.appendChild(navbar());
    body.appendChild(homeOnLoad());

    // const btn = document.querySelector(".addAnItem");
    // btn.addEventListener("click", () => {
    //     const homeContentDiv = document.querySelector(".home-content");
    //     // addContent(homeContentDiv, addItem());
    //     addContent();
    // });
    const btn = document.querySelector(".addAnItem");
    btn.addEventListener("click", () => {
        const homeContentDiv = document.querySelector(".home-content");
        addContent(homeContentDiv, addItem());
    });

});

// const btn = document.querySelector(".addAnItem");
// btn.addEventListener("click", () => {
//     const homeContentDiv = document.querySelector(".home-content");
//     // addContent(homeContentDiv, addItem());
//     addContent();
// });

