export const renderListMarkup = (projects, key, librariesMarkup) => {
  const maxNumProj = projects.length;

  let space = '&nbsp&nbsp';
  if (
    document.lastChild.clientWidth > 360 &&
    document.lastChild.clientWidth < 700
  ) {
    space = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
  } else if (document.lastChild.clientWidth > 700) {
    space =
      '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
  }
  const arr = projects.toSorted((a, b) => b.id - a.id);
  return arr
    .map(
      ({
        name,
        id,
        category,
        status,
        imgPreview,
        codeLink,
        siteLink,
        technology1,
        technology2,
        libraries,
      }) =>
        status && category === key
          ? `
	<li class="pages-list-item">
	  <h2 class="project-name">${name}</h2>
	  <p class="project-number">Project №: <span>${id}/${maxNumProj}</span></p>
	  <div class="project-img-container">
		<img src="${imgPreview}" alt="${name}">
	  </div>
	  <div class="description">
		<div class="description-info">
		  <ul class="technology-list">
			<li class="technology-item">${technology1}</li>
			<li class="technology-item">${technology2}</li>
		  </ul>
		  <ul class="libraries-list"></ul>
		</div>
		<div class="libraries ${key}Libraries">Libraries ${space}▼${librariesMarkup(
              libraries
            )}</div>
		<div class="links-container">
		  <a class="project-link" href="${codeLink}" target="_blank" rel="noopener noreferrer">Code</a>
		  <a class="project-link" href="${siteLink}" target="_blank" rel="noopener noreferrer">Preview</a>
		</div>
	  </div>
	</li>`
          : ''
    )
    .join('');
};
