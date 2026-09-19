import{h as w,s as O}from"./header-BSrT61__.js";import{p as I}from"./project-arr-461LqDuh.js";//!!! Работает только если на одной страничке одна форма
const S=document.querySelector("form"),r={text1:document.querySelector(".text-error1"),text2:document.querySelector(".text-error2"),text3:document.querySelector(".text-error3"),email:document.querySelector(".email-error"),tel:document.querySelector(".tel-error"),checkbox:document.querySelector(".checkbox-error"),number:document.querySelector(".number-error"),textarea:document.querySelector(".textarea-error"),select:document.querySelector(".select-error")},f={checkbox:"checkboxSave1",text1:"name1Save1",text2:"name2Save1",text3:"name3Save1",email:"emailSave1",number:"numberSave1",tel:"telSave1",textarea:"textareaSave1",select:"selectSave1"},d={checkbox:"errorCheckbox1",text1:"text1Error1",text2:"text2Error1",text3:"text3Error1",email:"errorEmail1",number:"errorNumber1",tel:"errorTel1",textarea:"errorTextarea1",select:"selectError1"},c={required:"This field is required",email:"Please enter a valid email address",text:"The first character cannot be a number",text2:"Must contain 2 or more characters",tel:"Must contain only numbers",tel2:"Must contain between 10 and 15 digits",loading:"Loading..."};//! SET STYLE TO ERRORS
function q(t){t&&(t.style.display="block",t.style.color="rgb(206, 0, 0)",t.style.fontSize="14px",t.style.fontWeight="600")}Object.values(r).forEach(q);//! GET ERRORS
document.addEventListener("DOMContentLoaded",()=>{const t=e=>{try{const o=localStorage.getItem(e);return o?JSON.parse(o):null}catch(o){return console.warn(`Failed to parse localStorage item "${e}":`,o),null}};[{element:r.text1,valueKey:f.text1,errorKey:d.text1,validate:e=>e&&isNaN(e[0])&&e.length>=2},{element:r.text2,valueKey:f.text2,errorKey:d.text2,validate:e=>e&&isNaN(e[0])&&e.length>=2},{element:r.text3,valueKey:f.text3,errorKey:d.text3,validate:e=>e&&isNaN(e[0])&&e.length>=2},{element:r.email,valueKey:f.email,errorKey:d.email,validate:e=>e&&new RegExp('^((?:[A-Za-z0-9!#$%&\'*+\\-\\/=?^_`{|}~]|(?<=^|\\.)"|"(?=$|\\.|@)|(?<=".*)[ .](?=.*")|(?<!\\.)\\.){1,64})(@)((?:[A-Za-z0-9.\\-])*(?:[A-Za-z0-9])\\.(?:[A-Za-z0-9]){2,})$').test(e)},{element:r.tel,valueKey:f.tel,errorKey:d.tel,validate:e=>e&&/^\d+$/.test(e)&&e.length>=10&&e.length<=15},{element:r.checkbox,valueKey:f.checkbox,errorKey:d.checkbox,validate:e=>e===!0},{element:r.number,valueKey:f.number,errorKey:d.number,validate:e=>e&&e.trim()!==""},{element:r.textarea,valueKey:f.textarea,errorKey:d.textarea,validate:e=>e&&e.trim()!==""},{element:r.select,valueKey:f.select,errorKey:d.select,validate:e=>e&&e.trim()!==""}].forEach(({element:e,valueKey:o,errorKey:l,validate:s})=>{if(e){const a=t(o),n=t(l);a!==null&&s(a)?(localStorage.removeItem(l),e.textContent=""):n!==null&&(e.textContent=n)}})});S.addEventListener("submit",t=>{t.preventDefault();//! Clear previous error messages
r.text1&&(r.text1.textContent=""),r.text2&&(r.text2.textContent=""),r.text3&&(r.text3.textContent=""),r.email&&(r.email.textContent=""),r.tel&&(r.tel.textContent=""),r.checkbox&&(r.checkbox.textContent=""),r.number&&(r.number.textContent=""),r.textarea&&(r.textarea.textContent=""),r.select&&(r.select.textContent="");const i=[];//! Check
[...t.target].forEach(e=>{if(e.localName!=="button"){if(e.type==="checkbox"&&!e.checked){r.checkbox&&(r.checkbox.textContent=c.required,i.push("Checkbox not checked"),localStorage.setItem(d.checkbox,JSON.stringify(c.required)));return}if(e.type==="number"&&!e.value.trim()){r.number&&(r.number.textContent=c.required,i.push("Number empty"),localStorage.setItem(d.number,JSON.stringify(c.required)));return}if(e.type==="email"){const o=new RegExp('^((?:[A-Za-z0-9!#$%&\'*+\\-\\/=?^_`{|}~]|(?<=^|\\.)"|"(?=$|\\.|@)|(?<=".*)[ .](?=.*")|(?<!\\.)\\.){1,64})(@)((?:[A-Za-z0-9.\\-])*(?:[A-Za-z0-9])\\.(?:[A-Za-z0-9]){2,})$');if(e.value.trim()){if(!o.test(e.value.trim())){r.email&&(r.email.textContent=c.email,localStorage.setItem(d.email,JSON.stringify(c.email)),i.push("Invalid email format"));return}}else{r.email&&(r.email.textContent=c.required,localStorage.setItem(d.email,JSON.stringify(c.required)),i.push("Email empty"));return}}if(e.type==="text"){if(e.name==="1")if(e.value.trim())if(isNaN(e.value.split("")[0])){if(e.value.length<2){r.text1&&(r.text1.textContent=c.text2,localStorage.setItem(d.text1,JSON.stringify(c.text2)),i.push("Text1 too short"));return}}else{r.text1&&(r.text1.textContent=c.text,localStorage.setItem(d.text1,JSON.stringify(c.text)),i.push("Text1 starts with number"));return}else{r.text1&&(r.text1.textContent=c.required,localStorage.setItem(d.text1,JSON.stringify(c.required)),i.push("Text1 empty"));return}if(e.name==="2")if(e.value.trim())if(isNaN(e.value.split("")[0])){if(e.value.length<2){r.text2&&(r.text2.textContent=c.text2,localStorage.setItem(d.text2,JSON.stringify(c.text2)),i.push("Text2 too short"));return}}else{r.text2&&(r.text2.textContent=c.text,localStorage.setItem(d.text2,JSON.stringify(c.text)),i.push("Text2 starts with number"));return}else{r.text2&&(r.text2.textContent=c.required,localStorage.setItem(d.text2,JSON.stringify(c.required)),i.push("Text2 empty"));return}if(e.name==="3")if(e.value.trim())if(isNaN(e.value.split("")[0])){if(e.value.length<2){r.text3&&(r.text3.textContent=c.text2,localStorage.setItem(d.text3,JSON.stringify(c.text2)),i.push("Text3 too short"));return}}else{r.text3&&(r.text3.textContent=c.text,localStorage.setItem(d.text3,JSON.stringify(c.text)),i.push("Text3 starts with number"));return}else{r.text3&&(r.text3.textContent=c.required,localStorage.setItem(d.text3,JSON.stringify(c.required)),i.push("Text3 empty"));return}}if(e.type==="tel")if(e.value.trim())if(/^\d+$/.test(e.value)){if(e.value.length<10||e.value.length>15){r.tel&&(r.tel.textContent=c.tel2,localStorage.setItem(d.tel,JSON.stringify(c.tel2)),i.push("Tel length invalid"));return}}else{r.tel&&(r.tel.textContent=c.tel,localStorage.setItem(d.tel,JSON.stringify(c.tel)),i.push("Tel contains non-numbers"));return}else{r.tel&&(r.tel.textContent=c.required,localStorage.setItem(d.tel,JSON.stringify(c.required)),i.push("Tel empty"));return}if(e.nodeName==="TEXTAREA"&&!e.value.trim()){r.textarea&&(r.textarea.textContent=c.required,localStorage.setItem(d.textarea,JSON.stringify(c.required)),i.push("Textarea empty"));return}if(e.nodeName==="SELECT"&&!e.value.trim()){r.select&&(r.select.textContent=c.required,localStorage.setItem(d.select,JSON.stringify(c.required)),i.push("Select empty"));return}}});//! If no errors, collect data, log, and redirect
if(i.length===0){[...t.target].forEach(s=>{s.type,s.type==="text"&&(s.name==="1"&&s.value,s.name==="2"&&s.value,s.name==="3"&&s.value),s.type==="email"&&s.value,s.type==="number"&&s.value,s.type==="tel"&&s.value,s.nodeName==="TEXTAREA"&&s.value,s.nodeName==="SELECT"&&s.value});//! Here you can send to backend
const e=t.target,o=document.getElementById("success-message1"),l=document.getElementById("error-message1");[...e].forEach(s=>{if(s.localName==="button"){let a=s.textContent;s.textContent=c.loading,setTimeout(()=>{s.textContent=a,S.action.toString().includes("https://formspree.io/f/xgvyaqjp")&&(async()=>{try{if((await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json"}})).ok)o.style.display="block",l.style.display="none",e.reset(),setTimeout(()=>{o.style.display="none"},3e3);else throw new Error("Error sending form")}catch{l.style.display="block",o.style.display="none",setTimeout(()=>{l.style.display="none"},3e3)}})()},2e3)}})}});//! LOCAL STORAGE - GET
[...S.elements].forEach(t=>{if(t.localName==="button")return;const i=e=>{try{const o=localStorage.getItem(e);return o?JSON.parse(o):null}catch(o){return console.warn(`Failed to parse localStorage item "${e}":`,o),null}};if(t.type==="checkbox"){const e=i(f.checkbox);e!==null&&(t.checked=e)}if(t.type==="text"){if(t.name==="1"){const e=i(f.text1);e!==null&&(t.value=e)}if(t.name==="2"){const e=i(f.text2);e!==null&&(t.value=e)}if(t.name==="3"){const e=i(f.text3);e!==null&&(t.value=e)}}if(t.type==="email"){const e=i(f.email);e!==null&&(t.value=e)}if(t.type==="number"){const e=i(f.number);e!==null&&(t.value=e)}if(t.type==="tel"){const e=i(f.tel);e!==null&&(t.value=e)}if(t.nodeName==="TEXTAREA"){const e=i(f.textarea);e!==null&&(t.value=e)}if(t.nodeName==="SELECT"){const e=i(f.select);e!==null&&(t.value=e)}});//! LOCAL STORAGE - ADD
[...S.elements].forEach(t=>{t.localName!=="button"&&(t.type==="checkbox"&&t.addEventListener("input",()=>{localStorage.setItem(f.checkbox,JSON.stringify(t.checked))}),t.type==="text"&&(t.name==="1"&&t.addEventListener("input",()=>{localStorage.setItem(f.text1,JSON.stringify(t.value))}),t.name==="2"&&t.addEventListener("input",()=>{localStorage.setItem(f.text2,JSON.stringify(t.value))}),t.name==="3"&&t.addEventListener("input",()=>{localStorage.setItem(f.text3,JSON.stringify(t.value))})),t.type==="email"&&t.addEventListener("input",()=>{localStorage.setItem(f.email,JSON.stringify(t.value))}),t.type==="number"&&t.addEventListener("input",()=>{localStorage.setItem(f.number,JSON.stringify(t.value))}),t.type==="tel"&&t.addEventListener("input",()=>{localStorage.setItem(f.tel,JSON.stringify(t.value))}),t.nodeName==="TEXTAREA"&&t.addEventListener("input",()=>{localStorage.setItem(f.textarea,JSON.stringify(t.value))}),t.nodeName==="SELECT"&&t.addEventListener("input",()=>{localStorage.setItem(f.select,JSON.stringify(t.value))}))});const g=document.querySelector(".boxes1");if(g){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),i=new WeakMap;let e=!1,o=!1;const l=()=>{g.classList.toggle("is-animating",o&&e&&!document.hidden&&!t.matches)},s=()=>{o||(g.insertAdjacentHTML("afterbegin",'<span class="special-box" aria-hidden="true"></span>'.repeat(680)),o=!0,g.classList.add("boxes-ready"),l())};if(g.addEventListener("mouseover",a=>{const n=a.target.closest(".special-box");!n||n.parentElement!==g||(clearTimeout(i.get(n)),n.classList.add("active"))}),g.addEventListener("mouseout",a=>{const n=a.target.closest(".special-box");if(!(!n||n.parentElement!==g)&&!(a.relatedTarget&&n.contains(a.relatedTarget))){if(clearTimeout(i.get(n)),t.matches){n.classList.remove("active");return}i.set(n,setTimeout(()=>{n.classList.remove("active"),i.delete(n)},300))}}),document.addEventListener("visibilitychange",l),t.addEventListener("change",l),"IntersectionObserver"in window){const a=new IntersectionObserver(u=>{u.some(x=>x.isIntersecting)&&(s(),a.disconnect())},{rootMargin:"300px 0px"});a.observe(g),new IntersectionObserver(u=>{e=u.some(x=>x.isIntersecting),l()}).observe(g)}else e=!0,s()}const $=t=>{var n;const i=document.querySelector(".outsourcing-projects-list-js"),e=document.querySelector(".show-more-js");if(!i||!e)return;let o=3;const l=(n=t==null?void 0:t.filter(({outsourcing:u})=>u))==null?void 0:n.reverse(),s=l.length,a=(u,x)=>u.map(({name:p,id:m,status:v,imgPreview:h,codeLink:y,siteLink:b,technology1:E,technology2:T,technology3:N},L)=>{if(v&&L<x)return`
    <li class="outsourcing-item" id="${m}">
    <h3 class="name-info-git">${p}</h3>
  <img
  class="gallery-image"
  src="${h}"
  alt="${p}"
  loading="lazy"
  decoding="async"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="outsourcing-technology">${E}</p>
      <p class="outsourcing-technology">${T}</p>
      <p class="outsourcing-technology">${N}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${b}" class="last-project-item-btn">Site</a>
    <a href="${y}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");i.insertAdjacentHTML("beforeend",a(l,o)),e.addEventListener("click",()=>{if(o===3)e.textContent="Hide",o=s,i.innerHTML="",i.insertAdjacentHTML("beforeend",a(l,o));else{e.textContent="Show more",o=3,i.innerHTML="",i.insertAdjacentHTML("beforeend",a(l,o));const u=i.querySelector(".outsourcing-item");if(u){const x=u.offsetTop-200;scrollTo(i,x,500)}}})},k="modulepreload",j=function(t){return"/DENYS_HV-PORTFOLIO/"+t},C={},J=function(i,e,o){let l=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),n=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));l=Promise.allSettled(e.map(u=>{if(u=j(u),u in C)return;C[u]=!0;const x=u.endsWith(".css"),p=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=x?"stylesheet":k,x||(m.as="script"),m.crossOrigin="",m.href=u,n&&m.setAttribute("nonce",n),document.head.appendChild(m),x)return new Promise((v,h)=>{m.addEventListener("load",v),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return l.then(a=>{for(const n of a||[])n.status==="rejected"&&s(n.reason);return i().catch(s)})};function M(t,i){if(!i)return;function e(o){const l=[];for(let a=o.length-1;a>=0;a--)l.push(o[a]);const s=l.length;return l.map(({name:a,id:n,status:u,imgPreview:x,codeLink:p,siteLink:m,technology1:v,technology2:h,technology3:y})=>{if(u&&n>s-10)return`
			<li class="swiper-slide" id="${n}">
      <h3 class="name-info-git">${a}</h3>
		<img
		class="gallery-image"
		src="${x}"
		alt="${a}"
		loading="lazy"
		decoding="async"
				width="355"
		height="200"
		/>
	<div class="project-item-info">
    <div class="project-item-info-left">
        <p class="technology">${v}</p>
        <p class="technology">${h}</p>
        <p class="technology">${y}</p>
    </div>
    <div class="project-item-info-right">
      <a href="${m}" class="last-project-item-btn">Site</a>
      <a href="${p}" class="last-project-item-btn">Code</a>
    </div>
	</div>

	</li>`}).join("")}i.insertAdjacentHTML("beforeend",e(t))}function A(){const t=document.querySelector(".last-projects-block .swiper");if(!t||t.swiper)return;let i=!1,e;const o=async()=>{if(!(i||t.swiper)){i=!0;try{const{createLastProjectsSlider:l}=await J(async()=>{const{createLastProjectsSlider:s}=await import("./last-projects-slider-ByM9I6K3.js");return{createLastProjectsSlider:s}},[]);l(t),e==null||e.disconnect(),t.removeEventListener("focusin",o),t.removeEventListener("pointerdown",o)}catch(l){i=!1,console.error("Unable to load the project slider.",l)}}};if(t.addEventListener("focusin",o),t.addEventListener("pointerdown",o,{passive:!0}),!("IntersectionObserver"in window)){o();return}e=new IntersectionObserver(l=>{l.some(s=>s.isIntersecting)&&o()},{rootMargin:"600px 0px"}),e.observe(t)}const K=t=>{var n;const i=document.querySelector(".favorite-projects-list-js"),e=document.querySelector(".show-more-js1");if(!i||!e)return;let o=3;const l=(n=t==null?void 0:t.filter(({favorite:u})=>u))==null?void 0:n.reverse(),s=l.length,a=(u,x)=>u.map(({name:p,id:m,status:v,imgPreview:h,codeLink:y,siteLink:b,technology1:E,technology2:T,technology3:N},L)=>{if(v&&L<x)return`
    <li class="favorite-item" id="${m}">
    <h3 class="name-info-git">${p}</h3>
  <img
  class="gallery-image"
  src="${h}"
  alt="${p}"
  loading="lazy"
  decoding="async"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="favorite-technology">${E}</p>
      <p class="favorite-technology">${T}</p>
      <p class="favorite-technology">${N}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${b}" class="last-project-item-btn">Site</a>
    <a href="${y}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");i.insertAdjacentHTML("beforeend",a(l,o)),e.addEventListener("click",()=>{if(o===3)e.textContent="Hide",o=s,i.innerHTML="",i.insertAdjacentHTML("beforeend",a(l,o));else{e.textContent="Show more",o=3,i.innerHTML="",i.insertAdjacentHTML("beforeend",a(l,o));const u=i.querySelector(".favorite-item");if(u){const x=u.offsetTop-200;scrollTo(i,x,500)}}})};w();O();const P=document.querySelector(".swiper-wrapper");M(I,P);$(I);K(I);A();
//# sourceMappingURL=index-BpdVJR-u.js.map
