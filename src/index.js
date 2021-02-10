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

    const itemContainer = document.createElement('div')
    itemContainer.classList.add('item-container');
    const name = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const spicy = document.createElement('span');
    spicy.classList.add('spicy')

    name.textContent = item.name
    description.textContent = item.description
    price.textContent = `$ ${item.price}`
    spicy.innerHTML = `<img width='16' height='16' src='../assets/spicy.svg'>`

    item.spicy ? name.append(spicy) : null;

    if(item.spicy) {
        itemContainer.classList.add('spicy');
    }
    
    if (item.type === 'starters') {
        itemContainer.append(name, description, price)
        starters.append(itemContainer)
    } else if (item.type === 'pasta') {
        itemContainer.append(name, description, price)
        pasta.append(itemContainer)
    } else if (item.type === 'pizza') {
        itemContainer.append(name, description, price)
        pizza.append(itemContainer)
    }

})

document.querySelector('#check').onchange = function( ) {
    menuItems.forEach(item => {
        if(item.spicy) {
            console.log(item)
            document.querySelector('.spicy').parentNode.style.display = this.checked ? 'block' : 'none'
        }
    })
};

const renderApp = () => {
    sortItems()
    renderItems()
}

console.log(menuItems);
renderApp();