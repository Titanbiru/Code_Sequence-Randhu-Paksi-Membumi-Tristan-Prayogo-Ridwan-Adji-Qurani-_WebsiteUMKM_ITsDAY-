document.addEventListener('DOMContentLoaded', () => {
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

  // Auto slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);

  // Manual click dot
  navDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      showSlide(i);
    });
  });

  // === HAMBURGER NAV TOGGLE ===

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});

