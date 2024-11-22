// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Modal Functionality
const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeModalBtn = document.querySelector('.close-btn');

// Open Modal
loginBtn.addEventListener('click', () => {
  modal.classList.add('visible');
});

// Close Modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
});

// Close Modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('visible');
  }
});
