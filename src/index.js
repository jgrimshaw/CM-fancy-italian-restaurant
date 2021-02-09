// import "styles.css";
import menu from "./menu.js";
// --------------------------

const menuItems = menu.items;


// sort by menuOrder
const sortItems = () => {
    menuItems.sort((a, b) => {
        return a.menuOrder - b.menuOrder;
    })
}


// render items
const renderItems = () => menuItems.forEach(item => {
    
    const starters = document.querySelector('#starters');
    const pasta = document.querySelector('#pasta');
    const pizza = document.querySelector('#pizza');
    const name = document.createElement('h3');
    const description = document.createElement('p');

    if (item.type === 'starters') {
        name.textContent = item.name
        description.textContent = item.description
        starters.append(name)
        starters.append(description)
    } else if (item.type === 'pasta') {
        name.textContent = item.name
        description.textContent = item.description
        pasta.append(name)
        pasta.append(description)
    } else if (item.type === 'pizza') {
        name.textContent = item.name
        description.textContent = item.description
        pizza.append(name)
        pizza.append(description)
    }
})


const renderApp = () => {
    sortItems()
    renderItems(menuItems)
}


console.log(menuItems);
renderApp();