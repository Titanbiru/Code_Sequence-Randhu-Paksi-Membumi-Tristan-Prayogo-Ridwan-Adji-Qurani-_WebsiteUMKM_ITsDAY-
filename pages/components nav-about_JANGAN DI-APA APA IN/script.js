// === CAROUSEL FUNCTIONALITY ===
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const navDots = document.querySelectorAll('.slider-nav a');
let index = 0;

function showSlide(i) {
  const width = slider.clientWidth;
  slider.scrollTo({
    left: width * i,
    behavior: 'smooth'
  });

  navDots.forEach(dot => dot.classList.remove('active'));
  navDots[i].classList.add('active');
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);

navDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(i);
  });
});

// === HAMBURGER NAV TOGGLE ===
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
