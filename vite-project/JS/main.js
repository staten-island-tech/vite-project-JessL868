import '../CSS/style.css'
import {products} from '/JS/products.js'

const DOMSelectors = {
    button: document.querySelector(".btn"),
    container: document.querySelector(".container"),
    card: document.querySelector(".card"),
};


products.forEach((product) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card">
        <h2 class = "name">${product.name}</h2>
        <h2 class = "price">${product.price}</h2>
        <img id = "card-img" src="${product.img}" alt="">
    </div>`
));
 //movies.sort
 //movies.includes
 //movies.filter((movie) => movie.actors.includes("Liam"))