const plusBtns = document.querySelectorAll('.plus-btn');
const popupClose = document.querySelector('.closebtn');
const popup = document.querySelector('.popup');
const summaryList = document.getElementById('summary-list');

plusBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const itemName = e.target.getAttribute('data-item');

    // Check if item already exists in the summary
    const existingItem = summaryList.querySelector(`[data-item="${itemName}"]`);
    if (existingItem) {
      // If it exists, increment the quantity
      existingItem.value = parseInt(existingItem.value) + 1;
    } else {
      // Otherwise, create a new list item
      const li = document.createElement('li');
      li.innerHTML = `
        ${itemName}: <input type="number" value="1" min="1" class="quantity-input" data-item="${itemName}">
      `;
      summaryList.appendChild(li);
    }

    // Show the popup
    popup.classList.add('show');
  });
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('show');
});
