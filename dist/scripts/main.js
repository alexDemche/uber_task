'use strict';
// Start Scroll Top Button
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('js-scroll-top-btn').style.display = 'block';
  } else {
    document.getElementById('js-scroll-top-btn').style.display = 'none';
  }
};

// const topFunction = () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// };

const topBtn = document.getElementById('js-scroll-top-btn');
topBtn.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
);
// END Scroll Top Button
