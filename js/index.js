const cookiebutton = document.querySelector('#cookie-btn');
const cupcakebutton = document.querySelector('#cupcake-btn');
const cakebutton = document.querySelector('#cake-btn');

cookiebutton.addEventListener('click', (e) => {
    console.log('works');
    window.location.href = 'Menu.html';
});

cupcakebutton.addEventListener('click', (e) => {
    console.log('works');
    window.location.href = 'Menu.html#cupcake-section';
});

cakebutton.addEventListener('click', (e) => {
    console.log('works');
    window.location.href = 'Menu.html#cake-section';
});



// Initialize Feather icons
feather.replace();

// Toggle the navigation menu when the hamburger icon is clicked
document.getElementById('hamburger-icon').addEventListener('click', function () {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('visible');
});

// Hide the navigation menu when the arrow (close button) is clicked
document.getElementById('close-btn').addEventListener('click', function () {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('visible'); // Hide the menu
  });