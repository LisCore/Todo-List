// import '../styles/navbar.css';

// export function navbar() {
//     const theNavbar = document.createElement("div");
//     theNavbar.classList.add("navbar");
//     theNavbar.innerHTML = `
//         <p>ADD ITEM</p>
//         <button class="addAnItem">Add</button>
//     `;
//     const item = theNavbar.querySelector(".addAnItem");
//     item.addEventListener("click", ()=> {
//         let newInfo = getInfoFromUser(); 
//         newInfo.classList.add("enter-info");
//         newInfo.classList.add("open");
//         theNavbar.appendChild(newInfo);

//         newInfo.classList.remove("open");
//         newInfo.classList.add("hidden");
//     });

//     return theNavbar;
// }

// function getInfoFromUser() {
//     let newItem = document.createElement("div");
//     newItem.innerHTML = `
//         <p class="placeholder-text">Add an item test</p>
//         <div class="a-todo">
//             <form action="#">
//                 <label for="name">Name of task:</label>
//                 <input type="text" name="name" id="name"><br>
//                 <label for="note">Additional notes:</label>
//                 <textarea name="note" id="note" style="width: 50%; height: 50%; max-width: 250px; max-height: 100px;"></textarea><br><br>
//                 <label for="priority">Priority Level:</label>
//                 <select name="priority" id="priority">
//                     <option value="na">None</option>
//                     <option value="low">Low</option>
//                     <option value="med">Medium</option>
//                     <option value="high">High</option>
//                 </select><br>
//                 <button class="submit">Submit</button>
//             </form>
//         </div>
//     `; 
//     return newItem;
// }
import '../styles/navbar.css';
import {hereAreTheItems} from '../util/addContent.js';

export function navbar() {
    const theNavbar = document.createElement("div");
    theNavbar.classList.add("navbar");
    theNavbar.innerHTML = `
        <p>ADD ITEM</p>
        <button class="addAnItem">Add</button>
    `;

    const item = theNavbar.querySelector(".addAnItem");
    let newInfo = getInfoFromUser(); 
    newInfo.classList.add("enter-info", "hidden"); 
    theNavbar.appendChild(newInfo);

    item.addEventListener("click", () => {
        if (newInfo.classList.contains("hidden")) {
            newInfo.classList.remove("hidden");
            newInfo.classList.add("open");
        } else {
            newInfo.classList.remove("open");
            newInfo.classList.add("hidden");
        }
    });

    return theNavbar;
}

function getInfoFromUser() {
    let newItem = document.createElement("div");
    newItem.innerHTML = `
        <p class="placeholder-text">Add an item test</p>
        <div class="a-todo">
            <form action="#">
                <label for="name">Name of task:</label>
                <input type="text" name="name" id="name"><br>
                <label for="note">Additional notes:</label>
                <textarea name="note" id="note" style="width: 50%; height: 50%; max-width: 250px; max-height: 100px; maxlength="40""></textarea><br><br>
                <label for="priority">Priority Level:</label>
                <select name="priority" id="priority">
                    <option value="none">None</option>
                    <option value="low">Low</option>
                    <option value="med">Medium</option>
                    <option value="high">High</option>
                </select><br>
                <button class="submit">Submit</button>
            </form>
        </div>
    `; 
    newItem.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); 

        const form = event.target;
        const formData = new FormData(event.target); 

        if (!formData.get('note').trim()) {
            formData.set('note', 'N/A');
        }

        const data = Object.fromEntries(formData.entries()); 

        hereAreTheItems(data); 
    });

    return newItem;
}
