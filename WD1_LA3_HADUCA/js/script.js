// gell all the buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

let cart = [];
let total = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // get the element (item or cart)
    const productElement = button.parentElement;

    // Kunin product name at price
    const name = productElement.querySelector('.product_name').textContent;
    // get the price string, remove '₱' then convert to number
    const priceText = productElement.querySelector('.product_price').textContent;
    const price = parseFloat(priceText.replace('₱', ''));

    // Add sa cart array
    cart.push({ name, price });

    // Update total
    total += price;

    // show the aside ul (list)
    updateCartUI();
  });
});

function updateCartUI() {
  // Clear current list
  cartItemsContainer.innerHTML = '';

  // Loop sa cart items
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(li);
  });

  // Update total
  cartTotalElement.textContent = total.toFixed(2);
}
