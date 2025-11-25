const URL = "https://fakestoreapi.com/products/category/electronics";
const cart = []; 

async function getTechProducts() {
try {
const response = await fetch(URL);
const products = await response.json();

const container = document.getElementById("products");
container.innerHTML = "";

products.forEach(product => {
const card = document.createElement("div");
card.className = "product";
card.innerHTML = `
<h2>${product.title}</h2>
<img src="${product.image}" alt="${product.title}">
<p><strong>Prezzo:</strong> $${product.price}</p>
<p>${product.description}</p>
<button class="btn-buy">Compra Ora</button>
`;
container.appendChild(card);

const btn = card.querySelector(".btn-buy");
btn.addEventListener("click", () => addToCart(product));
});

} catch (error) {
console.error("Errore nel caricamento:", error);
}
}


function renderCart() {
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

cartItems.innerHTML = "";
let total = 0;

cart.forEach(item => {
const li = document.createElement("li");
li.textContent = `${item.title} - $${item.price}`;
cartItems.appendChild(li);
total += item.price;
});

cartTotal.textContent = total.toFixed(2);
}


getTechProducts();

