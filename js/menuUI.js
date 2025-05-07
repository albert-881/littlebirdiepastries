 // Retrieve cart and total price from localStorage
 const cart = JSON.parse(localStorage.getItem('cart')) || {};
 const totalPrice = localStorage.getItem('totalPrice') || "0.00";
 const orderList = document.getElementById('order-summary');
 orderList.innerHTML = '';
 // Populate order list

 console.log(cart);
 console.log(totalPrice);
 for (let item in cart) {
   const li = document.createElement('li');
   li.textContent = `${item} — Qty: ${cart[item]}`;
   orderList.appendChild(li);
 }

 // Append total price at the end
 const totalLi = document.createElement('li');
 totalLi.style.marginTop = '10px';
 totalLi.style.fontWeight = 'bold';
 totalLi.textContent = `Total: $${parseFloat(totalPrice).toFixed(2)}`;
 orderList.appendChild(totalLi);

 // Handle form submission
 document.getElementById('order-form').addEventListener('submit', function(e) {
   e.preventDefault();

   // You could send the data to your backend here
   alert('Order submitted! Thank you.');

   // Clear localStorage after submission
   localStorage.removeItem('cart');
   localStorage.removeItem('totalPrice');

   // Optionally redirect or reset form
   this.reset();
 });