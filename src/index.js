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

// categorize, check if spicy, render items
const renderItems = () => menuItems.forEach(item => {
    
    const starters = document.querySelector('#starters');
    const pasta = document.querySelector('#pasta');
    const pizza = document.querySelector('#pizza');

    const name = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const spicy = document.createElement('span');
    spicy.classList.add('spice')

    name.textContent = item.name
    description.textContent = item.description
    price.textContent = `$ ${item.price}`
    spicy.innerHTML = `<img width='16' height='16' src='../assets/spicy.svg'>`

    item.spicy ? name.append(spicy) : null;

    if (item.type === 'starters') {
        starters.append(name, description, price)
    } else if (item.type === 'pasta') {
        pasta.append(name, description, price)
    } else if (item.type === 'pizza') {
        pizza.append(name, description, price)
    }
})



const renderApp = () => {
    sortItems()
    renderItems()
}


console.log(menuItems);
renderApp();