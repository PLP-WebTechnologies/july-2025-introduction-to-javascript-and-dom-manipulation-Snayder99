/* ============================
   Part 1: Variables & Conditionals
   ============================ */
let discountCode = "GREEN15";
let cart = [];
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Welcome, Guest! Please log in to enjoy more features.");
} else {
    console.log("Welcome back, valued customer!");
}

/* ============================
   Part 2: Functions
   ============================ */
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartCount();
    console.log(`${productName} added to cart!`);
}

function calculateTotal() {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    return total;
}

/* ============================
   Part 3: Loops
   ============================ */
let categories = ["Seeds", "Fertilizers", "Pesticides", "Equipment"];
for (let i = 0; i < categories.length; i++) {
    console.log(`Category ${i + 1}: ${categories[i]}`);
}

let offerCount = 0;
while (offerCount < 3) {
    console.log(`Special offer ${offerCount + 1} available!`);
    offerCount++;
}

/* ============================
   Part 4: DOM Interactions
   ============================ */
document.querySelectorAll(".card-button").forEach((button) => {
    button.addEventListener("click", () => {
        let productCard = button.closest(".card");
        let productName = productCard.querySelector("h3").innerText;
        let priceText = productCard.querySelector(".price").innerText.replace(/[^\d]/g, "");
        let price = parseFloat(priceText);

        addToCart(productName, price);
        alert(`${productName} has been added to your cart!`);
    });
});

function updateCartCount() {
    let cartCountElement = document.getElementById("cart-count");
    if (!cartCountElement) {
        cartCountElement = document.createElement("span");
        cartCountElement.id = "cart-count";
        cartCountElement.style.background = "red";
        cartCountElement.style.color = "white";
        cartCountElement.style.padding = "2px 6px";
        cartCountElement.style.marginLeft = "5px";
        cartCountElement.style.borderRadius = "50%";
        document.querySelector("header .logo").appendChild(cartCountElement);
    }
    cartCountElement.innerText = cart.length;
}

window.addEventListener("DOMContentLoaded", () => {
    let offerBox = document.querySelector(".special-offer");
    if (offerBox) {
        offerBox.style.border = "2px dashed orange";
        offerBox.style.padding = "10px";
        offerBox.style.backgroundColor = "#fff7e6";
    }
});
