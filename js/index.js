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

