import{h as w}from"./assets/header-DMm7itIw.js";import{p as m}from"./assets/project-arr-BY_gKk3u.js";import{S as g}from"./assets/vendor-BiMJRTlQ.js";function b(t,i){function o(s){const r=[];for(let e=s.length-1;e>=0;e--)r.push(s[e]);const l=r.length;return r.map(({name:e,id:a,status:n,imgPreview:c,codeLink:p,siteLink:d,technology1:u,technology2:f,technology3:h})=>{if(n&&a>l-10)return`
			<li class="swiper-slide" id="${a}">
      <h3 class="name-info-git">${e}</h3>
		<img
		class="gallery-image"
		src="${c}"
		alt="${e}"
				width="355"
		height="200"
		/>
	<div class="project-item-info">
    <div class="project-item-info-left">
        <p class="technology">${u}</p>
        <p class="technology">${f}</p>
        <p class="technology">${h}</p>
    </div>
    <div class="project-item-info-right">
      <a href="${d}" class="last-project-item-btn">Site</a>
      <a href="${p}" class="last-project-item-btn">Code</a>
    </div>
	</div>

	</li>`}).join("")}i.insertAdjacentHTML("beforeend",o(t))}function v(){return new g(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!1,slidesPerView:1,watchOverflow:!0,spaceBetween:20,slidesPerGroup:1,centeredSlides:!0,initialSlide:0,loop:!0,freeMode:!1,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:400,direction:"horizontal",effect:"coverflow",coverflowEffect:{rotate:0,stretch:80,slideShadows:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})}w();const S=document.querySelector(".swiper-wrapper");b(m,S);v();document.querySelectorAll('a[target="_blank"]').forEach(t=>{t.addEventListener("click",function(i){i.preventDefault(),setTimeout(()=>{window.open(this.href,"_blank")},100)})});
//# sourceMappingURL=index.js.map