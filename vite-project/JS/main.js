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
        <img id = "card-img" src= "${product.img}" alt="">
    </div>`
));
 //movies.sort
 //movies.includes
 //movies.filter((movie) => movie.actors.includes("Liam"))

document.querySelector("#btn").addEventListener("click", function() {
    if(document.body.classList.contains("light")){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }

});
document.querySelector("#all").addEventListener("click", function() {
    DOMSelectors.container.innerHTML = '';
    products.forEach((product) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card">
            <h2 class = "name">${product.name}</h2>
            <h2 class = "price">${product.price}</h2>
            <img id = "card-img" src="${product.img}" alt="">
        </div>`
    ));
});

document.querySelector("#electronics").addEventListener("click", function() {
    DOMSelectors.container.innerHTML = ''; 

    const electronicsProducts = products.filter((product) => product.category === "Electronics");

    electronicsProducts.forEach((product) => {DOMSelectors.container.insertAdjacentHTML("beforeend", `
            <div class="card">
                <h2 class="name">${product.name}</h2>
                <h2 class="price">${product.price}</h2>
                <img id="card-img" src="${product.img}" alt="">
            </div>
        `);
    });
});

document.querySelector("#home").addEventListener("click", function () {
    DOMSelectors.container.innerHTML = '';

    const homeProducts = products.filter((product) => product.category === "Home");

    homeProducts.forEach((product) => {DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card">
            <h2 class="name">${product.name}</h2>
            <h2 class="price">${product.price}</h2>
            <img id="card-img" src="${product.img}" alt="">
        </div>`);
    });
});

document.querySelector("#candy").addEventListener("click", function () {
    DOMSelectors.container.innerHTML = '';

    const candyProducts = products.filter((product) => product.category === "Candy");

    candyProducts.forEach((product) => {DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card">
            <h2 class="name">${product.name}</h2>
            <h2 class="price">${product.price}</h2>
            <img id="card-img" src="${product.img}" alt="">
        </div>`);
    });
});
document.querySelector("#cleaning").addEventListener("click", function () {
    DOMSelectors.container.innerHTML = '';

    const cleaningProducts = products.filter((product) => product.category === "Cleaning");

    cleaningProducts.forEach((product) => {DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card">
            <h2 class="name">${product.name}</h2>
            <h2 class="price">${product.price}</h2>
            <img id="card-img" src="${product.img}" alt="">
        </div>`);
    });
});

