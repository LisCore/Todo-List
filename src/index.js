import './styles/styles-template.css';

console.log("123");
document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    let textMessage = document.createElement("h1");
    textMessage.textContent = "Hello World!";
    body.appendChild(textMessage);
});

