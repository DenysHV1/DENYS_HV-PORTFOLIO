const y={apiVisualsEl:document.querySelector("#api-visuals-js"),componentsEl:document.querySelector("#components-list-js"),webAppsEl:document.querySelector("#web-apps-list-js"),webGamesEl:document.querySelector("#web-games-list-js"),websitesEl:document.querySelector("#websites-list-js"),apiVisualKey:"api-visuals",componentsKey:"components",webAppsKey:"web-apps",webGamesKey:"web-games",websitesKey:"websites",websitesPagination:document.querySelector(".websites-pagination-js"),apiVisualsPagination:document.querySelector(".api-visuals-pagination-js"),componentsPagination:document.querySelector(".components-pagination-js"),webAppsPagination:document.querySelector(".web-apps-pagination-js"),webGamesPagination:document.querySelector(".web-games-pagination-js")},h=n=>n.map(({name:e,link:r},o,t)=>t.length>0&&`<a class="library-item" href="${r}" target="_blank" rel="noopener noreferrer">${e}</a>`).join(""),f=(n,e,r)=>{const o=n.length;let t="&nbsp&nbsp";return document.lastChild.clientWidth>360&&document.lastChild.clientWidth<700?t="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp":document.lastChild.clientWidth>700&&(t="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"),n.toSorted((i,l)=>l.id-i.id).map(({name:i,id:l,category:s,status:a,imgPreview:c,codeLink:b,siteLink:u,technology1:d,technology2:m,libraries:g})=>a&&s===e?`
	<li class="pages-list-item">
	  <h2 class="project-name">${i}</h2>
	  <p class="project-number">Project №: <span>${l}/${o}</span></p>
	  <div class="project-img-container">
		<img src="${c}" alt="${i}">
	  </div>
	  <div class="description">
		<div class="description-info">
		  <ul class="technology-list">
			<li class="technology-item">${d}</li>
			<li class="technology-item">${m}</li>
		  </ul>
		  <ul class="libraries-list"></ul>
		</div>
		<div class="libraries ${e}Libraries">Libraries ${t}▼${r(g)}</div>
		<div class="links-container">
		  <a class="project-link" href="${b}" target="_blank" rel="noopener noreferrer">Code</a>
		  <a class="project-link" href="${u}" target="_blank" rel="noopener noreferrer">Preview</a>
		</div>
	  </div>
	</li>`:"").join("")},j=(n,e)=>{const r=n.children.length,o=[],t=n.querySelectorAll(".pages-list-item");let p=1;function i(s){return[...t].forEach((a,c)=>{c+1!==s?a.style.display="none":a.style.display="flex"})}i(p);for(let s=1;s<=r;s+=1)o.push(s);function l(s){return s.map(a=>`<button class="pagination-btn" type="button" data-num="${a}">${a}</button>`).join("")}e.insertAdjacentHTML("beforeend",l(o)),e.addEventListener("click",s=>{s.target.nodeName==="BUTTON"&&(p=Number(s.target.dataset.num),i(p))})},w=n=>{n.forEach(e=>{Number(e.children.length)<1&&(e.style.display="none"),e.addEventListener("click",()=>{e.classList.toggle("open")})})};export{y as a,h as l,w as o,j as p,f as r};
//# sourceMappingURL=openLibraries-S6A99LcV.js.map
