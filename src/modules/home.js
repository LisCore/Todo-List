import '../styles/home.css';

export function homeOnLoad() {
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    homeContent.innerHTML = `
        <h1>My to-do list</h1>
        <div class="adding-items">

        </div>
    `;

    return homeContent;
}
