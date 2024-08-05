// export function addContent(homeDOM, itemToAdd) {
//     homeDOM.appendChild(itemToAdd);

// }
// src/modules/addItem.js
export function addContent() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added on click.';
    return newElement;
}
