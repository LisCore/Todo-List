import '../styles/home.css';

export function homeOnLoad() {
    const an_item = document.createElement("div");
    an_item.classList.add("home-content");
    an_item.innerHTML = `
        <h1>My to-do list</h1>

    `;

    return an_item;
}
