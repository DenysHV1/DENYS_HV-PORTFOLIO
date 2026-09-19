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

  const toggleSwitch = document.getElementById('switch');
  toggleSwitch.checked = body.classList.contains('dark-theme');
  toggleSwitch.addEventListener('change', function () {
    body.classList.toggle('dark-theme', toggleSwitch.checked);
    try {
      localStorage.setItem('theme', toggleSwitch.checked ? 'dark' : 'light');
    } catch {
      // Theme changes still work for this visit without browser storage.
    }
  });

  const menuLinkAll = document.querySelectorAll('.menu-link');
  menuLinkAll.forEach(link => {
    link.addEventListener('click', () => {
      menuLinkAll.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
      sessionStorage.setItem('activeLink', link.textContent);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const activeLink = sessionStorage.getItem('activeLink');
    if (activeLink) {
      menuLinkAll.forEach(link => {
        if (link.textContent === activeLink) {
          link.classList.add('active');
        }
      });
    }
  });

  const headerLogo = document.querySelectorAll('.header-logo');

  headerLogo.forEach(logo => {
    logo.addEventListener('click', () => {
      sessionStorage.removeItem('activeLink');
    });
  });
}

