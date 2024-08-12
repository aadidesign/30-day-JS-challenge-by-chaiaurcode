// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description of product 1', image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description of product 2', image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description of product 3', image: 'image3.jpg' }
];

let cart = [];

// Function to display products
function displayProducts() {
    const productListing = document.getElementById('product-listing');
    productListing.innerHTML = products.map(product => `
        <div class="product-card">
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
    displayCart();
}

// Function to display shopping cart
function displayCart() {
    const cartDiv = document.getElementById('shopping-cart');
    cartDiv.innerHTML = '<h2>Shopping Cart</h2>';
    cart.forEach(item => {
        cartDiv.innerHTML += `
            <div>
                <span>${item.product.name} - $${item.product.price} x ${item.quantity}</span>
                <button onclick="removeFromCart(${item.product.id})">Remove</button>
            </div>
        `;
    });
}

// Function to remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    displayCart();
}

// Function to handle checkout
function handleCheckout() {
    const checkoutDiv = document.getElementById('checkout');
    checkoutDiv.innerHTML = `
        <h2>Checkout</h2>
        <form onsubmit="submitOrder(event)">
            <input type="text" placeholder="Name" required><br>
            <input type="text" placeholder="Address" required><br>
            <input type="text" placeholder="Payment Details" required><br>
            <button type="submit">Submit Order</button>
        </form>
    `;
}

// Function to submit order
function submitOrder(event) {
    event.preventDefault();
    alert('Order submitted!');
}

displayProducts();
