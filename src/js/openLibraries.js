export const openLibraries = librariesList => {
  librariesList.forEach(element => {
    if (Number(element.children.length) < 1) {
      element.style.display = 'none';
    }
    element.addEventListener('click', () => {
      element.classList.toggle('open');
    });
  });
};
