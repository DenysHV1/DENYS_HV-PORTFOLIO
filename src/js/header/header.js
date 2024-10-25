export function header() {
  const menu = document.querySelector('.media-menu');
  const menuBtn = document.querySelector('.burger-menu');
  const closeBtn = document.querySelector('.close-media-button');
  const body = document.body;

  menuBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
    body.style.overflow = 'auto';
  });
  menu.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      menu.classList.remove('is-open');
      body.style.overflow = 'auto';
    }
  });

  // Theme

  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      toggleSwitch.checked = true;
    }
  });

  const toggleSwitch = document.getElementById('switch');
  toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
}
