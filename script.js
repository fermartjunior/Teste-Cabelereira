
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });

    const navList = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('open');
});


