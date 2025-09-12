window.addToCart = function(productName, price) {
  console.log(`Adding ${productName} - ₱${price} to cart`);
  // Example: store cart in localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update cart link count
  document.getElementById('cart-link').textContent = `View Cart (${cart.length})`;
};

window.viewCart = function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  alert(cart.map(item => `${item.name} - ₱${item.price}`).join('\n') || 'Cart is empty');
};

window.closeCart = function() {
  console.log("Closing cart");
};