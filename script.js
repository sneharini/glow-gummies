// script.js

// Change Main Image
function changeImage(src) {
  document.getElementById('main-image').src = src;
}

// Update Quantity
let quantity = 1;
function updateQuantity(change) {
  quantity = Math.max(1, quantity + change); // Prevent quantity from going below 1
  document.getElementById('quantity').innerText = quantity;
}

// Add to Cart
document.getElementById('add-to-cart').addEventListener('click', () => {
  alert(`Added ${quantity} GlowGummies to your cart!`);
});

// Buy Now
document.getElementById('buy-now').addEventListener('click', () => {
  alert('Redirecting to checkout...');
});
