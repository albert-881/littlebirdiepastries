// Load cart and price
const cart = JSON.parse(localStorage.getItem('cart')) || {};
const totalPrice = localStorage.getItem('totalPrice') || "0.00";
const orderList = document.getElementById('order-summary');
orderList.innerHTML = '';

// Render cart items
for (let item in cart) {
  const li = document.createElement('li');
  li.textContent = `${item} — Qty: ${cart[item]}`;
  orderList.appendChild(li);
}

// Add total
const totalLi = document.createElement('li');
totalLi.style.marginTop = '10px';
totalLi.style.fontWeight = 'bold';
totalLi.textContent = `Total: $${parseFloat(totalPrice).toFixed(2)}`;
orderList.appendChild(totalLi);

// Convert cart to string for email
const orderDetails = Object.entries(cart).map(
  ([item, qty]) => `${item} — Qty: ${qty}`
).join('\n');

// Handle form submission
document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const pickupDate = document.getElementById('pickupDate').value;

  // Send email to the customer
  emailjs.send('service_cfz2lkq', 'template_xmztq39', {
    to_name: name,
    phone: phone,
    to_email: email,
    pickupDate: pickupDate,
    order_details: orderDetails,
    total: `$${parseFloat(totalPrice).toFixed(2)}`
  }, 'VcGCEfdQA37Xhfw4d')
    .then(() => {
      console.log('Customer email sent successfully!');
      alert('Order submitted! Thank you.');
      
      // Send email to the owner
      const ownerEmail = 'quinteroalberto88@gmail.com'; // Replace with the owner's email
      return emailjs.send('service_cfz2lkq', 'template_w7hyggf', {
        to_name: 'Veronica', // Owner's name
        to_email: ownerEmail,
        pickupDate: pickupDate,
        order_details: orderDetails,
        total: `$${parseFloat(totalPrice).toFixed(2)}`,
        customer_name: name,
        customer_phone: phone,
        customer_email: email
      }, 'VcGCEfdQA37Xhfw4d');
    })
    .then(() => {
      console.log('Owner email sent successfully!');
      
      // Clear localStorage and reset form
      localStorage.removeItem('cart');
      localStorage.removeItem('totalPrice');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Error during email sending:', error);
      alert('There was an error submitting your order. Please try again.');
    });
});
