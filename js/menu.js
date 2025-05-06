const plusBtns = document.querySelectorAll('.plus-btn');
const popupClose = document.querySelector('.closebtn');
const popup = document.querySelector('.popup');
const summaryList = document.getElementById('summary-list');

plusBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const itemName = e.target.getAttribute('data-item');

    const existingInput = summaryList.querySelector(`input[data-item="${itemName}"]`);
    if (existingInput) {
      existingInput.value = parseInt(existingInput.value) + 1;
    } else {
      const li = document.createElement('li');
      li.innerHTML = `
        ${itemName}: 
        <input type="number" value="1" min="1" class="quantity-input" data-item="${itemName}">
        <button class="remove-btn" title="Remove item">−</button>
      `;
      summaryList.appendChild(li);

      li.querySelector('.remove-btn').addEventListener('click', () => li.remove());
    }

    popup.classList.add('show');
  });
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('show');
});


document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
