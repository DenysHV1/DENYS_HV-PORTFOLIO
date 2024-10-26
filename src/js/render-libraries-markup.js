export const librariesMarkup = librariesArr => {
  return librariesArr
    .map(
      ({ name, link }, _, arr) =>
        arr.length > 0 &&
        `<a class="library-item" href="${link}" target="_blank" rel="noopener noreferrer">${name}</a>`
    )
    .join('');
};
