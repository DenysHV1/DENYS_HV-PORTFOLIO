const b={apiVisualsEl:document.querySelector("#api-visuals-js"),componentsEl:document.querySelector("#components-list-js"),webAppsEl:document.querySelector("#web-apps-list-js"),webGamesEl:document.querySelector("#web-games-list-js"),websitesEl:document.querySelector("#websites-list-js"),apiVisualKey:"api-visuals",componentsKey:"components",webAppsKey:"web-apps",webGamesKey:"web-games",websitesKey:"websites",websitesPagination:document.querySelector(".websites-pagination-js"),apiVisualsPagination:document.querySelector(".api-visuals-pagination-js"),componentsPagination:document.querySelector(".components-pagination-js"),webAppsPagination:document.querySelector(".web-apps-pagination-js"),webGamesPagination:document.querySelector(".web-games-pagination-js")},g=a=>a.map(({name:i,link:r},o,s)=>s.length>0&&`<a class="library-item" href="${r}" target="_blank" rel="noopener noreferrer">${i}</a>`).join(""),y=(a,i,r)=>a.toSorted((s,t)=>t.id-s.id).map(({name:s,id:t,category:l,status:c,imgPreview:e,codeLink:n,siteLink:p,technology1:u,technology2:m,libraries:d})=>c&&l===i?`
	<li class="pages-list-item">
	  <h2 class="project-name">${s}</h2>
	  <p class="project-number">Project number: <span>${t}</span></p>
	  <div class="project-img-container">
		<img src="${e}" alt="${s}">
	  </div>
	  <div class="description">
		<div class="description-info">
		  <ul class="technology-list">
			<li class="technology-item">${u}</li>
			<li class="technology-item">${m}</li>
		  </ul>
		  <ul class="libraries-list"></ul>
		</div>
		<div class="libraries">${r(d)}</div>
		<div class="links-container">
		  <a class="project-link" href="${n}" target="_blank" rel="noopener noreferrer">Code</a>
		  <a class="project-link" href="${p}" target="_blank" rel="noopener noreferrer">Preview</a>
		</div>
	  </div>
	</li>`:"").join(""),j=(a,i)=>{const r=a.children.length,o=[],s=a.querySelectorAll(".pages-list-item");let t=1;function l(e){return[...s].forEach((n,p)=>{p+1!==e?n.style.display="none":n.style.display="flex"})}l(t);for(let e=1;e<=r;e+=1)o.push(e);function c(e){return e.map(n=>`<button class="pagination-btn" type="button" data-num="${n}">${n}</button>`).join("")}i.insertAdjacentHTML("beforeend",c(o)),i.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(t=Number(e.target.dataset.num),l(t))})};export{b as a,g as l,j as p,y as r};
//# sourceMappingURL=pagination-NDMu3dEB.js.map
