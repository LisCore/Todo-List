import '../styles/navbar.css';

export function navbar() {
    const theNavbar = document.createElement("div");
    theNavbar.classList.add("navbar");
    theNavbar.innerHTML = `
        <p>ADD ITEM</p>

    `;

    return theNavbar;
}
