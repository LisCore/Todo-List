//I think this file should grab all the contents from navbar and parse it. 
//Actually this is requesting to see if addItem will work

import { addItem } from '../modules/addItem.js';

export async function addContent(home, item) {
    try {
        const newItem = addItem(item); 
        home.appendChild(newItem);
    } catch (error) {
        console.log(error)
    }
}
export async function hereAreTheItems(data) {
    try {
        const { name, note, priority } = data;
        const home = document.querySelector('.adding-items'); 

        if (!name || !note || !priority) {
            throw new Error("Incomplete form data");
        }

        await addContent(home, { name, note, priority });
        console.log(`Entry: ${name}, ${note}, ${priority}`);
    } catch (error) {
        console.log(error);
    }
}