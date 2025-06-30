document.addEventListener('DOMContentLoaded', () => {
  // Slider: always auto-advance
  const slides = document.querySelectorAll('.slide');
  let current = 0, count = slides.length, interval = 5000;

  function goTo(n) {
    slides.forEach((s, i) => {
      s.classList.remove('active','prev');
      if (i === n) s.classList.add('active');
      else if (i === (n - 1 + count) % count) s.classList.add('prev');
    });
  }

  function next() {
    current = (current + 1) % count;
    goTo(current);
  }

  // Start cycling
  setInterval(next, interval);

  // Header scroll backdrop
  const body = document.body;
  function onScroll() {
    body.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Burger menu
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  burger.addEventListener('click', () => {
    menu.classList.toggle('mobile-active');
  });
});
