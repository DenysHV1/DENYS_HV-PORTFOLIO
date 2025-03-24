import{h as y,s as S}from"./assets/header-BSBwaPu7.js";import{p as m}from"./assets/project-arr-DYNGu00k.js";import{S as $}from"./assets/vendor-BiMJRTlQ.js";function E(r,e){function a(i){const s=[];for(let t=i.length-1;t>=0;t--)s.push(i[t]);const d=s.length;return s.map(({name:t,id:l,status:o,imgPreview:n,codeLink:c,siteLink:f,technology1:p,technology2:u,technology3:h})=>{if(o&&l>d-10)return`
			<li class="swiper-slide" id="${l}">
      <h3 class="name-info-git">${t}</h3>
		<img
		class="gallery-image"
		src="${n}"
		alt="${t}"
				width="355"
		height="200"
		/>
	<div class="project-item-info">
    <div class="project-item-info-left">
        <p class="technology">${p}</p>
        <p class="technology">${u}</p>
        <p class="technology">${h}</p>
    </div>
    <div class="project-item-info-right">
      <a href="${f}" class="last-project-item-btn">Site</a>
      <a href="${c}" class="last-project-item-btn">Code</a>
    </div>
	</div>

	</li>`}).join("")}e.insertAdjacentHTML("beforeend",a(r))}function L(){return new $(".swiper ",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!1,slidesPerView:1,watchOverflow:!0,spaceBetween:20,slidesPerGroup:1,centeredSlides:!0,initialSlide:0,loop:!0,freeMode:!1,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:400,direction:"horizontal",effect:"coverflow",coverflowEffect:{rotate:0,stretch:80,slideShadows:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})}const M=r=>{var l;const e=document.querySelector(".favorite-projects-list-js"),a=document.querySelector(".show-more-js");let i=3;const s=(l=r==null?void 0:r.filter(({favorite:o})=>o))==null?void 0:l.reverse(),d=s.length,t=(o,n)=>o.map(({name:c,id:f,status:p,imgPreview:u,codeLink:h,siteLink:v,technology1:g,technology2:w,technology3:b},j)=>{if(p&&j<n)return`
    <li class="favorite-item" id="${f}">
    <h3 class="name-info-git">${c}</h3>
  <img
  class="gallery-image"
  src="${u}"
  alt="${c}"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="favorite-technology">${g}</p>
      <p class="favorite-technology">${w}</p>
      <p class="favorite-technology">${b}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${v}" class="last-project-item-btn">Site</a>
    <a href="${h}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");e.insertAdjacentHTML("beforeend",t(s,i)),a.addEventListener("click",()=>{if(i===3)a.textContent="Hide",i=d,e.innerHTML="",e.insertAdjacentHTML("beforeend",t(s,i));else{a.textContent="Show more",i=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",t(s,i));const o=e.querySelector(".favorite-item");if(o){const n=o.offsetTop-200;scrollTo(e,n,500)}}})};y();const P=document.querySelector(".swiper-wrapper");E(m,P);L();M(m);document.querySelectorAll('a[target="_blank"]').forEach(r=>{r.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{window.open(this.href,"_blank")},100)})});S();
//# sourceMappingURL=index.js.map
