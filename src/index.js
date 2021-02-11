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
    name.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    const price = document.createElement('p');
    price.textContent = `$ ${item.price}`
    price.classList.add('price')

    const spicy = document.createElement('span');
    spicy.innerHTML = `<img width='25' height='25' src='../assets/spicy-pepper.svg'>`
    spicy.classList.add('spicy')

    if(item.spicy) {
        itemContainer.classList.add('spicy-option');
        name.append(spicy);
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

const renderApp = () => {

    document.querySelector('#check').onchange = () => {
        const input = document.querySelector('#check');
        const spicyItems = document.querySelectorAll('.spicy-option');
        spicyItems.forEach(item => {
            item.style.display = input.checked ? 'block' : 'none'
        })
    };

    sortItems();
    renderItems();
}

renderApp();