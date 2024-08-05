export function addItem() {
    const an_item = document.createElement("div");
    an_item.classList.add("new-item");
    an_item.innerHTML = `
        <p>Add an item test</p>
    `;
    return an_item;
}
