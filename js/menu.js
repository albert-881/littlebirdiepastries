const prices = {
  "Cupcake: Banana": 3.00,
  "Cupcake: Pumpkin": 3.20,
  "Cupcake: Blueberry": 3.10,
  "Cupcake: Carrot": 3.00,
  "Cupcake: Chocolate": 3.50,
  "Cupcake: Vanilla": 3.00,
  "Cake: New York Cheesecake": 4.50,
  "Cake: Cookies & Cream Cheesecake": 4.00,
  "Cake: Cookies & Cream Ice Cream Cheesecake": 4.50,
  "Cake: Pistachio": 4.20
};

const plusBtns = document.querySelectorAll('.plus-btn');
const popupClose = document.querySelector('.closebtn');
const popup = document.querySelector('.popup');
const summaryList = document.getElementById('summary-list');
const totalPriceElement = document.getElementById('total-price');

// Object to store the quantities of items
let cart = {};

// Function to update the total price
function updateTotalPrice() {
  let total = 0;
  // Loop through the cart and calculate total
  for (let item in cart) {
    total += prices[item] * cart[item];
  }
  // Update the total price in the popup
  totalPriceElement.innerText = total.toFixed(2);
}

// Event listener for plus buttons
plusBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const itemName = e.target.getAttribute('data-item');

    // Check if item already exists in the cart
    if (cart[itemName]) {
      cart[itemName]++; // Increment the quantity
      // Update the quantity in the list
      const input = summaryList.querySelector(`input[data-item="${itemName}"]`);
      if (input) {
        input.value = cart[itemName];
      }
    } else {
      // Add new item to the cart
      cart[itemName] = 1;
      const li = document.createElement('li');
      li.innerHTML = `
        ${itemName}: 
        <input type="number" value="1" min="1" class="quantity-input" data-item="${itemName}">
        <button class="remove-btn" title="Remove item">−</button>
      `;
      summaryList.appendChild(li);

      // Add event listener for quantity input
      li.querySelector('.quantity-input').addEventListener('input', (e) => {
        const quantity = parseInt(e.target.value);
        if (quantity > 0) {
          cart[itemName] = quantity; // Update the quantity in the cart
        } else {
          delete cart[itemName]; // Remove item if quantity is zero or negative
          li.remove(); // Remove from the list
        }
        updateTotalPrice(); // Update total price
      });

      // Add event listener for remove button
      li.querySelector('.remove-btn').addEventListener('click', () => {
        delete cart[itemName]; // Remove item from the cart
        li.remove(); // Remove from the list
        updateTotalPrice(); // Update total price
      });
    }

    // Update the total price whenever an item is added or updated
    updateTotalPrice();

    // Show the popup if it's not already visible
    popup.classList.add('show');
  });
});

// Close the popup when the "Hide" button is clicked
popupClose.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Optional: Flip card functionality (if you're using it)
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
