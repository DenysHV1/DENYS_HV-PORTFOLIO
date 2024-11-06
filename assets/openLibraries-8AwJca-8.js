const h={apiVisualsEl:document.querySelector("#api-visuals-js"),componentsEl:document.querySelector("#components-list-js"),webAppsEl:document.querySelector("#web-apps-list-js"),webGamesEl:document.querySelector("#web-games-list-js"),websitesEl:document.querySelector("#websites-list-js"),apiVisualKey:"api-visuals",componentsKey:"components",webAppsKey:"web-apps",webGamesKey:"web-games",websitesKey:"websites",websitesPagination:document.querySelector(".websites-pagination-js"),apiVisualsPagination:document.querySelector(".api-visuals-pagination-js"),componentsPagination:document.querySelector(".components-pagination-js"),webAppsPagination:document.querySelector(".web-apps-pagination-js"),webGamesPagination:document.querySelector(".web-games-pagination-js")},y=t=>t.map(({name:e,link:o},l,i)=>i.length>0&&`<a class="library-item" href="${o}" target="_blank" rel="noopener noreferrer">${e}</a>`).join(""),f=(t,e,o)=>{const l=t.length;let i="&nbsp&nbsp";return document.lastChild.clientWidth>360&&document.lastChild.clientWidth<700?i="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp":document.lastChild.clientWidth>700&&(i="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"),t.toSorted((a,r)=>r.id-a.id).map(({name:a,id:r,category:p,status:s,imgPreview:n,codeLink:c,siteLink:d,technology1:u,technology2:m,libraries:g})=>s&&p===e?`
	<li class="pages-list-item">
	  <h2 class="project-name">${a}</h2>
	  <p class="project-number">Project №: <span>${r}/${l}</span></p>
	  <div class="project-img-container">
		<img src="${n}" alt="${a}">
	  </div>
	  <div class="description">
		<div class="description-info">
		  <ul class="technology-list">
			<li class="technology-item">${u}</li>
			<li class="technology-item">${m}</li>
		  </ul>
		  <ul class="libraries-list"></ul>
		</div>
		<div class="libraries ${e}Libraries">Libraries ${i}▼${o(g)}</div>
		<div class="links-container">
		  <a class="project-link" href="${c}" target="_blank" rel="noopener noreferrer">Code</a>
		  <a class="project-link" href="${d}" target="_blank" rel="noopener noreferrer">Preview</a>
		</div>
	  </div>
	</li>`:"").join("")},v=(t,e,o)=>{const l=t.children.length,i=[],b=t.querySelectorAll(".pages-list-item");let a=1;function r(s){return[...b].forEach((n,c)=>{c+1!==s?n.style.display="none":n.style.display="flex"})}r(a);for(let s=1;s<=l;s+=1)i.push(s);function p(s){return s.map(n=>`<button class="pagination-btn" type="button" data-num="${n}">${n}</button>`).join("")}e.insertAdjacentHTML("beforeend",p(i)),e.addEventListener("click",s=>{s.target.nodeName==="BUTTON"&&([...e.children].forEach(n=>{n.classList.contains("active")&&n.classList.remove("active")}),s.target.classList.add("active"),o.forEach(n=>{Number(n.children.length)>0&&n.classList.remove("open")}),a=Number(s.target.dataset.num),r(a))})},j=t=>{t.forEach(e=>{Number(e.children.length)<1&&(e.style.display="none"),e.addEventListener("click",()=>{e.classList.toggle("open")})})};export{h as a,y as l,j as o,v as p,f as r};
//# sourceMappingURL=openLibraries-8AwJca-8.js.map
