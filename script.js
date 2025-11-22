// Dati prodotti
const products = [
    { id: 1, name: "Maglietta Bianca", price: 19.99, img: "https://via.placeholder.com/300" },
    { id: 2, name: "Felpa Nera", price: 39.99, img: "https://via.placeholder.com/300" },
    { id: 3, name: "Cappello", price: 14.99, img: "https://via.placeholder.com/300" }
];

let cart = [];

// Mostra prodotti
const productList = document.getElementById("productList");
products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>€${p.price}</p>
    `;
    div.onclick = () => openProduct(p);
    productList.appendChild(div);
});

// Modale prodotto
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const addToCartBtn = document.getElementById("addToCartBtn");

let selectedProduct = null;

function openProduct(prod) {
    selectedProduct = prod;
    modalImg.src = prod.img;
    modalName.textContent = prod.name;
    modalPrice.textContent = `€${prod.price}`;
    modal.classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () =>
    modal.classList.add("hidden");

// Aggiungi al carrello
addToCartBtn.onclick = () => {
    cart.push(selectedProduct);
    updateCart();
    modal.classList.add("hidden");
};

// Carrello
const cartModal = document.getElementById("cartModal");

document.getElementById("cartBtn").onclick = () =>
    cartModal.classList.remove("hidden");

document.getElementById("closeCart").onclick = () =>
    cartModal.classList.add("hidden");

function updateCart() {
    document.getElementById("cartCount").textContent = cart.length;

    const list = document.getElementById("cartItems");
    list.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price}`;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("cartTotal").textContent = total.toFixed(2);
}

document.getElementById("checkoutBtn").onclick = () =>
    alert("Funzione checkout da integrare!");
