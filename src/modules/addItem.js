//This will add a new container inside the to-do list

import '../styles/item.css';

export function addItem(item) {
    if (!item || !item.name || !item.note || !item.priority) {
        throw new Error("Invalid item data");
    }
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("new-item");
    itemContainer.innerHTML = `
        <div class="item-info">
            <p>Name: ${item.name}</p>
            <p>Note: ${item.note}</p>
            <p>Priority: ${item.priority}</p>
        </div>
    `;
    return itemContainer;
}