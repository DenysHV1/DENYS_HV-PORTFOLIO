import{h as w,s as I}from"./assets/header-BbK6rCuI.js";import{p as C}from"./assets/project-arr-N10vLT4Q.js";import{S as q}from"./assets/vendor-BiMJRTlQ.js";//!!! Работает только если на одной страничке одна форма
const v=document.querySelector("form"),r={text1:document.querySelector(".text-error1"),text2:document.querySelector(".text-error2"),text3:document.querySelector(".text-error3"),email:document.querySelector(".email-error"),tel:document.querySelector(".tel-error"),checkbox:document.querySelector(".checkbox-error"),number:document.querySelector(".number-error"),textarea:document.querySelector(".textarea-error"),select:document.querySelector(".select-error")},l={checkbox:"checkboxSave1",text1:"name1Save1",text2:"name2Save1",text3:"name3Save1",email:"emailSave1",number:"numberSave1",tel:"telSave1",textarea:"textareaSave1",select:"selectSave1"},n={checkbox:"errorCheckbox1",text1:"text1Error1",text2:"text2Error1",text3:"text3Error1",email:"errorEmail1",number:"errorNumber1",tel:"errorTel1",textarea:"errorTextarea1",select:"selectError1"},o={required:"This field is required",email:"Please enter a valid email address",text:"The first character cannot be a number",text2:"Must contain 2 or more characters",tel:"Must contain only numbers",tel2:"Must contain between 10 and 15 digits",loading:"Loading..."};//! SET STYLE TO ERRORS
function L(e){e&&(e.style.display="block",e.style.color="rgb(206, 0, 0)",e.style.fontSize="14px",e.style.fontWeight="600")}Object.values(r).forEach(L);//! GET ERRORS
document.addEventListener("DOMContentLoaded",()=>{const e=t=>{try{const a=localStorage.getItem(t);return a?JSON.parse(a):null}catch(a){return console.warn(`Failed to parse localStorage item "${t}":`,a),null}};[{element:r.text1,valueKey:l.text1,errorKey:n.text1,validate:t=>t&&isNaN(t[0])&&t.length>=2},{element:r.text2,valueKey:l.text2,errorKey:n.text2,validate:t=>t&&isNaN(t[0])&&t.length>=2},{element:r.text3,valueKey:l.text3,errorKey:n.text3,validate:t=>t&&isNaN(t[0])&&t.length>=2},{element:r.email,valueKey:l.email,errorKey:n.email,validate:t=>t&&new RegExp('^((?:[A-Za-z0-9!#$%&\'*+\\-\\/=?^_`{|}~]|(?<=^|\\.)"|"(?=$|\\.|@)|(?<=".*)[ .](?=.*")|(?<!\\.)\\.){1,64})(@)((?:[A-Za-z0-9.\\-])*(?:[A-Za-z0-9])\\.(?:[A-Za-z0-9]){2,})$').test(t)},{element:r.tel,valueKey:l.tel,errorKey:n.tel,validate:t=>t&&/^\d+$/.test(t)&&t.length>=10&&t.length<=15},{element:r.checkbox,valueKey:l.checkbox,errorKey:n.checkbox,validate:t=>t===!0},{element:r.number,valueKey:l.number,errorKey:n.number,validate:t=>t&&t.trim()!==""},{element:r.textarea,valueKey:l.textarea,errorKey:n.textarea,validate:t=>t&&t.trim()!==""},{element:r.select,valueKey:l.select,errorKey:n.select,validate:t=>t&&t.trim()!==""}].forEach(({element:t,valueKey:a,errorKey:c,validate:s})=>{if(t){const u=e(a),d=e(c);u!==null&&s(u)?(localStorage.removeItem(c),t.textContent=""):d!==null&&(t.textContent=d)}})});v.addEventListener("submit",e=>{e.preventDefault();//! Clear previous error messages
r.text1&&(r.text1.textContent=""),r.text2&&(r.text2.textContent=""),r.text3&&(r.text3.textContent=""),r.email&&(r.email.textContent=""),r.tel&&(r.tel.textContent=""),r.checkbox&&(r.checkbox.textContent=""),r.number&&(r.number.textContent=""),r.textarea&&(r.textarea.textContent=""),r.select&&(r.select.textContent="");const i=[];//! Check
[...e.target].forEach(t=>{if(t.localName!=="button"){if(t.type==="checkbox"&&!t.checked){r.checkbox&&(r.checkbox.textContent=o.required,i.push("Checkbox not checked"),localStorage.setItem(n.checkbox,JSON.stringify(o.required)));return}if(t.type==="number"&&!t.value.trim()){r.number&&(r.number.textContent=o.required,i.push("Number empty"),localStorage.setItem(n.number,JSON.stringify(o.required)));return}if(t.type==="email"){const a=new RegExp('^((?:[A-Za-z0-9!#$%&\'*+\\-\\/=?^_`{|}~]|(?<=^|\\.)"|"(?=$|\\.|@)|(?<=".*)[ .](?=.*")|(?<!\\.)\\.){1,64})(@)((?:[A-Za-z0-9.\\-])*(?:[A-Za-z0-9])\\.(?:[A-Za-z0-9]){2,})$');if(t.value.trim()){if(!a.test(t.value.trim())){r.email&&(r.email.textContent=o.email,localStorage.setItem(n.email,JSON.stringify(o.email)),i.push("Invalid email format"));return}}else{r.email&&(r.email.textContent=o.required,localStorage.setItem(n.email,JSON.stringify(o.required)),i.push("Email empty"));return}}if(t.type==="text"){if(t.name==="1")if(t.value.trim())if(isNaN(t.value.split("")[0])){if(t.value.length<2){r.text1&&(r.text1.textContent=o.text2,localStorage.setItem(n.text1,JSON.stringify(o.text2)),i.push("Text1 too short"));return}}else{r.text1&&(r.text1.textContent=o.text,localStorage.setItem(n.text1,JSON.stringify(o.text)),i.push("Text1 starts with number"));return}else{r.text1&&(r.text1.textContent=o.required,localStorage.setItem(n.text1,JSON.stringify(o.required)),i.push("Text1 empty"));return}if(t.name==="2")if(t.value.trim())if(isNaN(t.value.split("")[0])){if(t.value.length<2){r.text2&&(r.text2.textContent=o.text2,localStorage.setItem(n.text2,JSON.stringify(o.text2)),i.push("Text2 too short"));return}}else{r.text2&&(r.text2.textContent=o.text,localStorage.setItem(n.text2,JSON.stringify(o.text)),i.push("Text2 starts with number"));return}else{r.text2&&(r.text2.textContent=o.required,localStorage.setItem(n.text2,JSON.stringify(o.required)),i.push("Text2 empty"));return}if(t.name==="3")if(t.value.trim())if(isNaN(t.value.split("")[0])){if(t.value.length<2){r.text3&&(r.text3.textContent=o.text2,localStorage.setItem(n.text3,JSON.stringify(o.text2)),i.push("Text3 too short"));return}}else{r.text3&&(r.text3.textContent=o.text,localStorage.setItem(n.text3,JSON.stringify(o.text)),i.push("Text3 starts with number"));return}else{r.text3&&(r.text3.textContent=o.required,localStorage.setItem(n.text3,JSON.stringify(o.required)),i.push("Text3 empty"));return}}if(t.type==="tel")if(t.value.trim())if(/^\d+$/.test(t.value)){if(t.value.length<10||t.value.length>15){r.tel&&(r.tel.textContent=o.tel2,localStorage.setItem(n.tel,JSON.stringify(o.tel2)),i.push("Tel length invalid"));return}}else{r.tel&&(r.tel.textContent=o.tel,localStorage.setItem(n.tel,JSON.stringify(o.tel)),i.push("Tel contains non-numbers"));return}else{r.tel&&(r.tel.textContent=o.required,localStorage.setItem(n.tel,JSON.stringify(o.required)),i.push("Tel empty"));return}if(t.nodeName==="TEXTAREA"&&!t.value.trim()){r.textarea&&(r.textarea.textContent=o.required,localStorage.setItem(n.textarea,JSON.stringify(o.required)),i.push("Textarea empty"));return}if(t.nodeName==="SELECT"&&!t.value.trim()){r.select&&(r.select.textContent=o.required,localStorage.setItem(n.select,JSON.stringify(o.required)),i.push("Select empty"));return}}});//! If no errors, collect data, log, and redirect
if(i.length===0){[...e.target].forEach(s=>{s.type,s.type==="text"&&(s.name==="1"&&s.value,s.name==="2"&&s.value,s.name==="3"&&s.value),s.type==="email"&&s.value,s.type==="number"&&s.value,s.type==="tel"&&s.value,s.nodeName==="TEXTAREA"&&s.value,s.nodeName==="SELECT"&&s.value});//! Here you can send to backend
const t=e.target,a=document.getElementById("success-message1"),c=document.getElementById("error-message1");[...t].forEach(s=>{if(s.localName==="button"){let u=s.textContent;s.textContent=o.loading,setTimeout(()=>{s.textContent=u,v.action.toString().includes("https://formspree.io/f/xgvyaqjp")&&(async()=>{try{if((await fetch(t.action,{method:t.method,body:new FormData(t),headers:{Accept:"application/json"}})).ok)a.style.display="block",c.style.display="none",t.reset(),setTimeout(()=>{a.style.display="none"},3e3);else throw new Error("Error sending form")}catch{c.style.display="block",a.style.display="none",setTimeout(()=>{c.style.display="none"},3e3)}})()},2e3)}})}});//! LOCAL STORAGE - GET
[...v.elements].forEach(e=>{if(e.localName==="button")return;const i=t=>{try{const a=localStorage.getItem(t);return a?JSON.parse(a):null}catch(a){return console.warn(`Failed to parse localStorage item "${t}":`,a),null}};if(e.type==="checkbox"){const t=i(l.checkbox);t!==null&&(e.checked=t)}if(e.type==="text"){if(e.name==="1"){const t=i(l.text1);t!==null&&(e.value=t)}if(e.name==="2"){const t=i(l.text2);t!==null&&(e.value=t)}if(e.name==="3"){const t=i(l.text3);t!==null&&(e.value=t)}}if(e.type==="email"){const t=i(l.email);t!==null&&(e.value=t)}if(e.type==="number"){const t=i(l.number);t!==null&&(e.value=t)}if(e.type==="tel"){const t=i(l.tel);t!==null&&(e.value=t)}if(e.nodeName==="TEXTAREA"){const t=i(l.textarea);t!==null&&(e.value=t)}if(e.nodeName==="SELECT"){const t=i(l.select);t!==null&&(e.value=t)}});//! LOCAL STORAGE - ADD
[...v.elements].forEach(e=>{e.localName!=="button"&&(e.type==="checkbox"&&e.addEventListener("input",()=>{localStorage.setItem(l.checkbox,JSON.stringify(e.checked))}),e.type==="text"&&(e.name==="1"&&e.addEventListener("input",()=>{localStorage.setItem(l.text1,JSON.stringify(e.value))}),e.name==="2"&&e.addEventListener("input",()=>{localStorage.setItem(l.text2,JSON.stringify(e.value))}),e.name==="3"&&e.addEventListener("input",()=>{localStorage.setItem(l.text3,JSON.stringify(e.value))})),e.type==="email"&&e.addEventListener("input",()=>{localStorage.setItem(l.email,JSON.stringify(e.value))}),e.type==="number"&&e.addEventListener("input",()=>{localStorage.setItem(l.number,JSON.stringify(e.value))}),e.type==="tel"&&e.addEventListener("input",()=>{localStorage.setItem(l.tel,JSON.stringify(e.value))}),e.nodeName==="TEXTAREA"&&e.addEventListener("input",()=>{localStorage.setItem(l.textarea,JSON.stringify(e.value))}),e.nodeName==="SELECT"&&e.addEventListener("input",()=>{localStorage.setItem(l.select,JSON.stringify(e.value))}))});const k=document.querySelector(".boxes1"),$=()=>Array.from({length:680},(e,i)=>i+1).map(e=>'<span class="special-box"></span>').join("");k.insertAdjacentHTML("afterbegin",$());const O=document.querySelectorAll(".special-box");[...O].forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.add("active")}),e.addEventListener("mouseleave",()=>{setTimeout(()=>{e.classList.remove("active")},300)})});const j=e=>{var d;const i=document.querySelector(".outsourcing-projects-list-js"),t=document.querySelector(".show-more-js");let a=3;const c=(d=e==null?void 0:e.filter(({outsourcing:f})=>f))==null?void 0:d.reverse(),s=c.length,u=(f,x)=>f.map(({name:p,id:g,status:m,imgPreview:h,codeLink:y,siteLink:S,technology1:b,technology2:E,technology3:N},T)=>{if(m&&T<x)return`
    <li class="outsourcing-item" id="${g}">
    <h3 class="name-info-git">${p}</h3>
  <img
  class="gallery-image"
  src="${h}"
  alt="${p}"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="outsourcing-technology">${b}</p>
      <p class="outsourcing-technology">${E}</p>
      <p class="outsourcing-technology">${N}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${S}" class="last-project-item-btn">Site</a>
    <a href="${y}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");i.insertAdjacentHTML("beforeend",u(c,a)),t.addEventListener("click",()=>{if(a===3)t.textContent="Hide",a=s,i.innerHTML="",i.insertAdjacentHTML("beforeend",u(c,a));else{t.textContent="Show more",a=3,i.innerHTML="",i.insertAdjacentHTML("beforeend",u(c,a));const f=i.querySelector(".outsourcing-item");if(f){const x=f.offsetTop-200;scrollTo(i,x,500)}}})};function J(e,i){function t(a){const c=[];for(let u=a.length-1;u>=0;u--)c.push(a[u]);const s=c.length;return c.map(({name:u,id:d,status:f,imgPreview:x,codeLink:p,siteLink:g,technology1:m,technology2:h,technology3:y})=>{if(f&&d>s-10)return`
			<li class="swiper-slide" id="${d}">
      <h3 class="name-info-git">${u}</h3>
		<img
		class="gallery-image"
		src="${x}"
		alt="${u}"
				width="355"
		height="200"
		/>
	<div class="project-item-info">
    <div class="project-item-info-left">
        <p class="technology">${m}</p>
        <p class="technology">${h}</p>
        <p class="technology">${y}</p>
    </div>
    <div class="project-item-info-right">
      <a href="${g}" class="last-project-item-btn">Site</a>
      <a href="${p}" class="last-project-item-btn">Code</a>
    </div>
	</div>

	</li>`}).join("")}i.insertAdjacentHTML("beforeend",t(e))}function M(){return new q(".swiper ",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!1,slidesPerView:1,watchOverflow:!0,spaceBetween:20,slidesPerGroup:1,centeredSlides:!0,initialSlide:0,loop:!0,freeMode:!1,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:400,direction:"horizontal",effect:"coverflow",coverflowEffect:{rotate:0,stretch:80,slideShadows:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})}const A=e=>{var d;const i=document.querySelector(".favorite-projects-list-js"),t=document.querySelector(".show-more-js1");let a=3;const c=(d=e==null?void 0:e.filter(({favorite:f})=>f))==null?void 0:d.reverse(),s=c.length,u=(f,x)=>f.map(({name:p,id:g,status:m,imgPreview:h,codeLink:y,siteLink:S,technology1:b,technology2:E,technology3:N},T)=>{if(m&&T<x)return`
    <li class="favorite-item" id="${g}">
    <h3 class="name-info-git">${p}</h3>
  <img
  class="gallery-image"
  src="${h}"
  alt="${p}"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="favorite-technology">${b}</p>
      <p class="favorite-technology">${E}</p>
      <p class="favorite-technology">${N}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${S}" class="last-project-item-btn">Site</a>
    <a href="${y}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`}).join("");i.insertAdjacentHTML("beforeend",u(c,a)),t.addEventListener("click",()=>{if(a===3)t.textContent="Hide",a=s,i.innerHTML="",i.insertAdjacentHTML("beforeend",u(c,a));else{t.textContent="Show more",a=3,i.innerHTML="",i.insertAdjacentHTML("beforeend",u(c,a));const f=i.querySelector(".favorite-item");if(f){const x=f.offsetTop-200;scrollTo(i,x,500)}}})};w();const K=document.querySelector(".swiper-wrapper");J(C,K);M();j(C);A(C);document.querySelectorAll('a[target="_blank"]').forEach(e=>{e.addEventListener("click",function(i){i.preventDefault(),setTimeout(()=>{window.open(this.href,"_blank")},100)})});I();
//# sourceMappingURL=index.js.map
