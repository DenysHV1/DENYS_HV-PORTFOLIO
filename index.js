import{h as y,s as b}from"./assets/header-BYr-I79K.js";import{p as $}from"./assets/project-arr-DMu1FMBT.js";import{S}from"./assets/vendor-BiMJRTlQ.js";const L=r=>{var a;const e=document.querySelector(".outsourcing-projects-list-js"),n=document.querySelector(".show-more-js");let t=3;const o=(a=r==null?void 0:r.filter(({outsourcing:s})=>s))==null?void 0:a.reverse(),d=o.length,i=(s,l)=>s.map(({name:c,id:f,status:u,imgPreview:p,codeLink:h,siteLink:m,technology1:g,technology2:v,technology3:w},j)=>{if(u&&j<l)return`
    <li class="outsourcing-item" id="${f}">
    <h3 class="name-info-git">${c}</h3>
  <img
  class="gallery-image"
  src="${p}"
  alt="${c}"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="outsourcing-technology">${g}</p>
      <p class="outsourcing-technology">${v}</p>
      <p class="outsourcing-technology">${w}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${m}" class="last-project-item-btn">Site</a>
    <a href="${h}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");e.insertAdjacentHTML("beforeend",i(o,t)),n.addEventListener("click",()=>{if(t===3)n.textContent="Hide",t=d,e.innerHTML="",e.insertAdjacentHTML("beforeend",i(o,t));else{n.textContent="Show more",t=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",i(o,t));const s=e.querySelector(".outsourcing-item");if(s){const l=s.offsetTop-200;scrollTo(e,l,500)}}})};function M(r,e){function n(t){const o=[];for(let i=t.length-1;i>=0;i--)o.push(t[i]);const d=o.length;return o.map(({name:i,id:a,status:s,imgPreview:l,codeLink:c,siteLink:f,technology1:u,technology2:p,technology3:h})=>{if(s&&a>d-10)return`
			<li class="swiper-slide" id="${a}">
      <h3 class="name-info-git">${i}</h3>
		<img
		class="gallery-image"
		src="${l}"
		alt="${i}"
				width="355"
		height="200"
		/>
	<div class="project-item-info">
    <div class="project-item-info-left">
        <p class="technology">${u}</p>
        <p class="technology">${p}</p>
        <p class="technology">${h}</p>
    </div>
    <div class="project-item-info-right">
      <a href="${f}" class="last-project-item-btn">Site</a>
      <a href="${c}" class="last-project-item-btn">Code</a>
    </div>
	</div>

	</li>`}).join("")}e.insertAdjacentHTML("beforeend",n(r))}function T(){return new S(".swiper ",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!1,slidesPerView:1,watchOverflow:!0,spaceBetween:20,slidesPerGroup:1,centeredSlides:!0,initialSlide:0,loop:!0,freeMode:!1,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:400,direction:"horizontal",effect:"coverflow",coverflowEffect:{rotate:0,stretch:80,slideShadows:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})}const E=r=>{var a;const e=document.querySelector(".favorite-projects-list-js"),n=document.querySelector(".show-more-js");let t=3;const o=(a=r==null?void 0:r.filter(({favorite:s})=>s))==null?void 0:a.reverse(),d=o.length,i=(s,l)=>s.map(({name:c,id:f,status:u,imgPreview:p,codeLink:h,siteLink:m,technology1:g,technology2:v,technology3:w},j)=>{if(u&&j<l)return`
    <li class="favorite-item" id="${f}">
    <h3 class="name-info-git">${c}</h3>
  <img
  class="gallery-image"
  src="${p}"
  alt="${c}"
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
    <a href="${m}" class="last-project-item-btn">Site</a>
    <a href="${h}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");e.insertAdjacentHTML("beforeend",i(o,t)),n.addEventListener("click",()=>{if(t===3)n.textContent="Hide",t=d,e.innerHTML="",e.insertAdjacentHTML("beforeend",i(o,t));else{n.textContent="Show more",t=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",i(o,t));const s=e.querySelector(".favorite-item");if(s){const l=s.offsetTop-200;scrollTo(e,l,500)}}})};y();const H=document.querySelector(".swiper-wrapper");M($,H);T();L($);E($);document.querySelectorAll('a[target="_blank"]').forEach(r=>{r.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{window.open(this.href,"_blank")},100)})});b();
//# sourceMappingURL=index.js.map
