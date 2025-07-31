const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

  // Cambia el ícono según el tema
    if (document.body.classList.contains('light-theme')) {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});