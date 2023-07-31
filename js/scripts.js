// Add a class to elements when they come into view
const elementsInView = document.querySelectorAll('.fade-in');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const addClassWhenInView = () => {
  elementsInView.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('visible');
    }
  });
};

document.addEventListener('scroll', addClassWhenInView);
