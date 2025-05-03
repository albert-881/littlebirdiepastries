const cookiebutton = document.querySelector('#cookie-btn');

cookiebutton.addEventListener('click', (e) => {
    console.log('works');
    window.location.href = 'cookiesMenu.html';
});