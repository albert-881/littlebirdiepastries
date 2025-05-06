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

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const slideWidth = carousel.children[0].offsetWidth + 16; // slide width + gap (adjust gap if needed)
    let scrollAmount = 0;

    function autoSlide() {
      if (window.innerWidth >= 640) return; // Only on mobile

      scrollAmount += slideWidth;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0; // reset to beginning
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }

    setInterval(autoSlide, 2000); // Slide every 3 seconds
  });