// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description of product 1', image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description of product 2', image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description of product 3', image: 'image3.jpg' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display products
function displayProducts(productsToDisplay) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Function to display shopping cart
function displayCart() {
    const cartDiv = document.getElementById('shopping-cart');
    cartDiv.innerHTML = '<h2>Shopping Cart</h2>';
    if (cart.length === 0) {
        cartDiv.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            total += item.product.price * item.quantity;
            cartDiv.innerHTML += `
                <div>
                    <span>${item.product.name} - $${item.product.price} x ${item.quantity} = $${item.product.price * item.quantity}</span>
                    <button onclick="removeFromCart(${item.product.id})">Remove</button>
                </div>
            `;
        });
        cartDiv.innerHTML += `<h3>Total: $${total}</h3>`;
        cartDiv.innerHTML += `<button onclick="showSection('checkout')">Proceed to Checkout</button>`;
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Function to handle checkout
function handleCheckout() {
    const checkoutDiv = document.getElementById('checkout');
    checkoutDiv.innerHTML = `
        <h2>Checkout</h2>
        <form id="checkout-form" onsubmit="submitOrder(event)">
            <input type="text" id="name" placeholder="Name" required><br>
            <input type="text" id="address" placeholder="Address" required><br>
            <input type="text" id="payment" placeholder="Payment Details" required><br>
            <button type="submit">Submit Order</button>
        </form>
    `;
}

// Function to submit order
function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    if (name && address && payment) {
        const checkoutDiv = document.getElementById('checkout');
        let total = 0;
        let receiptHtml = `
            <h2>Order Receipt</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Payment Details:</strong> ${payment}</p>
            <h3>Items Ordered:</h3>
            <ul>
        `;
        cart.forEach(item => {
            total += item.product.price * item.quantity;
            receiptHtml += `
                <li>${item.product.name} - $${item.product.price} x ${item.quantity} = $${item.product.price * item.quantity}</li>
            `;
        });
        receiptHtml += `
            </ul>
            <h3>Total Amount: $${total}</h3>
            <button onclick="returnToShopping()">Return to Shopping</button>
        `;

        checkoutDiv.innerHTML = receiptHtml;
        localStorage.removeItem('cart');
        cart = [];
        displayCart();
    } else {
        alert('Please fill in all the fields.');
    }
}

// Function to return to shopping
function returnToShopping() {
    showSection('product-listing');
}

// Function to apply product filter
function applyFilter() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
}

// Function to show section
function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');

    if (sectionId === 'checkout') {
        handleCheckout(); // Prepare checkout section when it's shown
    }
}

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initial Display
displayProducts(products);
displayCart();
showSection('product-listing');
