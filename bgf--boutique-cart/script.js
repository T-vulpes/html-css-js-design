// Real fashion photos (via Unsplash)
const products = [
    { id: 1, name: "Black Oversized T-Shirt", price: 450, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
    { id: 2, name: "Cargo Parachute Pants", price: 850, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80" },
    { id: 3, name: "Minimalist Sneakers", price: 1200, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80" },
    { id: 4, name: "Modern Fit Jacket", price: 1650, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80" }
];

let cart = [];

const productsContainer = document.getElementById('products-container');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');

// Display products with images
function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price} $</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
    
    // Cart icon animation
    cartCount.style.transform = "scale(1.4)";
    setTimeout(() => cartCount.style.transform = "scale(1)", 200);
}

// Update cart panel (with images)
function updateCartUI() {
    cartCount.innerText = cart.length;
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} TL</div>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    totalPriceEl.innerText = total;
}

// Open / Close Cart
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    overlay.classList.add('show');
});

closeCartBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('show');
}

renderProducts();