// src/script.js

const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});
