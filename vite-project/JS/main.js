import '../CSS/style.css'
import {products} from '/JS/products.js'

const DOMSelectors = {
    button: document.querySelector(".btn"),
    container: document.queryselector
}

products.forEach((product) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card">
        <h2 class = name>${product.name}</h2>
        <h2 class = price>${product.price}</h2>
        <img class = img src="${product.img}" alt="">
    </div>`
));