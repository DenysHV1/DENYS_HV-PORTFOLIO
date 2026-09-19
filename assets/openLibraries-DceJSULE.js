const h={apiVisualsEl:document.querySelector("#api-visuals-js"),componentsEl:document.querySelector("#components-list-js"),webAppsEl:document.querySelector("#web-apps-list-js"),webGamesEl:document.querySelector("#web-games-list-js"),websitesEl:document.querySelector("#websites-list-js"),apiVisualKey:"api-visuals",componentsKey:"components",webAppsKey:"web-apps",webGamesKey:"web-games",websitesKey:"websites",websitesPagination:document.querySelector(".websites-pagination-js"),apiVisualsPagination:document.querySelector(".api-visuals-pagination-js"),componentsPagination:document.querySelector(".components-pagination-js"),webAppsPagination:document.querySelector(".web-apps-pagination-js"),webGamesPagination:document.querySelector(".web-games-pagination-js")},y=i=>i.map(({name:e,link:o},l,a)=>a.length>0&&`<a class="library-item" href="${o}" target="_blank" rel="noopener noreferrer">${e}</a>`).join(""),f=(i,e,o)=>{const l=i.length;let a="&nbsp&nbsp";return document.lastChild.clientWidth>360&&document.lastChild.clientWidth<700?a="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp":document.lastChild.clientWidth>700&&(a="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"),i.filter(({status:t,category:r})=>t&&r===e).toSorted((t,r)=>r.id-t.id).map(({name:t,id:r,imgPreview:c,codeLink:s,siteLink:n,technology1:p,technology2:d,technology3:u,libraries:g},m)=>`
	<li class="pages-list-item">
	  <h2 class="project-name">${t}</h2>
	  <p class="project-number">Project №: <span>${r}/${l}</span></p>
	  <div class="project-img-container">
		<img src="${c}" alt="${t}" loading="${m===0?"eager":"lazy"}" decoding="async" width="355" height="200">
	  </div>
	  <div class="description">
		<div class="description-info">
		  <ul class="technology-list">
			<li class="technology-item">${p}</li>
			<li class="technology-item">${d}</li>
      <li class="technology-item">${u}</li>
		  </ul>
		  <ul class="libraries-list"></ul>
		</div>
		<div class="libraries ${e}Libraries">Libraries ${a}▼${o(g)}</div>
		<div class="links-container">
		  <a class="project-link" href="${s}" target="_blank" rel="noopener noreferrer">Code</a>
		  <a class="project-link" href="${n}" target="_blank" rel="noopener noreferrer">Preview</a>
		</div>
	  </div>
	</li>`).join("")},v=(i,e,o)=>{const l=i.children.length,a=[],b=i.querySelectorAll(".pages-list-item");let t=1;function r(s){return[...b].forEach((n,p)=>{p+1!==s?n.style.display="none":n.style.display="flex"})}r(t);for(let s=1;s<=l;s+=1)a.push(s);function c(s){return s.map(n=>`<button class="pagination-btn" type="button" data-num="${n}">${n}</button>`).join("")}e.insertAdjacentHTML("beforeend",c(a)),e.addEventListener("click",s=>{s.target.nodeName==="BUTTON"&&([...e.children].forEach(n=>{n.classList.contains("active")&&n.classList.remove("active")}),s.target.classList.add("active"),o.forEach(n=>{Number(n.children.length)>0&&n.classList.remove("open")}),t=Number(s.target.dataset.num),r(t))})},w=i=>{i.forEach(e=>{Number(e.children.length)<1&&(e.style.display="none"),e.addEventListener("click",()=>{e.classList.toggle("open")})})};export{h as a,y as l,w as o,v as p,f as r};
//# sourceMappingURL=openLibraries-DceJSULE.js.map
