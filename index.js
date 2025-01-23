import{h as y}from"./assets/header-CBVV4Z3z.js";import{p as m}from"./assets/project-arr-CQl413ol.js";import{S}from"./assets/vendor-BiMJRTlQ.js";function $(r,e){function a(i){const o=[];for(let t=i.length-1;t>=0;t--)o.push(i[t]);const c=o.length;return o.map(({name:t,id:s,status:l,imgPreview:n,codeLink:d,siteLink:f,technology1:p,technology2:u,technology3:h})=>{if(l&&s>c-10)return`
			<li class="swiper-slide" id="${s}">
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
      <a href="${d}" class="last-project-item-btn">Code</a>
    </div>
	</div>

	</li>`}).join("")}e.insertAdjacentHTML("beforeend",a(r))}function E(){return new S(".swiper ",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!1,slidesPerView:1,watchOverflow:!0,spaceBetween:20,slidesPerGroup:1,centeredSlides:!0,initialSlide:0,loop:!0,freeMode:!1,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:400,direction:"horizontal",effect:"coverflow",coverflowEffect:{rotate:0,stretch:80,slideShadows:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})}const L=r=>{const e=document.querySelector(".favorite-projects-list-js"),a=document.querySelector(".show-more-js");let i=3;const o=r==null?void 0:r.filter(({favorite:s})=>s),c=o.length,t=(s,l)=>s.map(({name:n,id:d,status:f,imgPreview:p,codeLink:u,siteLink:h,technology1:g,technology2:v,technology3:w,favorite:b},j)=>{if(f&&b&&j<l)return`
    <li class="favorite-item" id="${d}">
    <h3 class="name-info-git">${n}</h3>
  <img
  class="gallery-image"
  src="${p}"
  alt="${n}"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="favorite-technology">${g}</p>
      <p class="favorite-technology">${v}</p>
      <p class="favorite-technology">${w}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${h}" class="last-project-item-btn">Site</a>
    <a href="${u}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");e.insertAdjacentHTML("beforeend",t(o,i)),a.addEventListener("click",()=>{if(i===3)a.textContent="Hide",i=c,e.innerHTML="",e.insertAdjacentHTML("beforeend",t(o,i));else{a.textContent="Show more",i=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",t(o,i));const s=e.querySelector(".favorite-item");if(s){const l=s.offsetTop-200;scrollTo(e,l,500)}}})};y();const M=document.querySelector(".swiper-wrapper");$(m,M);E();L(m);document.querySelectorAll('a[target="_blank"]').forEach(r=>{r.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{window.open(this.href,"_blank")},100)})});
//# sourceMappingURL=index.js.map
