(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const l=()=>{const r=document.querySelector(".scroll-up");window.addEventListener("scroll",function(){r.classList.toggle("is-open-scroll",window.scrollY>500)})};function a(){const r=document.querySelector(".media-menu"),c=document.querySelector(".burger-menu"),d=document.querySelector(".close-media-button"),s=document.body;c.addEventListener("click",()=>{r.classList.add("is-open"),s.style.overflow="hidden"}),d.addEventListener("click",()=>{r.classList.remove("is-open"),s.style.overflow="auto"}),r.addEventListener("click",o=>{o.target===o.currentTarget&&(r.classList.remove("is-open"),s.style.overflow="auto")}),window.addEventListener("load",()=>{localStorage.getItem("theme")==="dark"&&(s.classList.add("dark-theme"),e.checked=!0)});const e=document.getElementById("switch");e.addEventListener("change",function(){e.checked?(s.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(s.classList.remove("dark-theme"),localStorage.setItem("theme","light"))});const t=document.querySelectorAll(".menu-link");t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(i=>i.classList.remove("active")),o.classList.add("active"),sessionStorage.setItem("activeLink",o.textContent)})}),document.addEventListener("DOMContentLoaded",()=>{const o=sessionStorage.getItem("activeLink");o&&t.forEach(i=>{i.textContent===o&&i.classList.add("active")})}),document.querySelectorAll(".header-logo").forEach(o=>{o.addEventListener("click",()=>{sessionStorage.removeItem("activeLink")})})}export{a as h,l as s};
//# sourceMappingURL=header-D1KsnbuG.js.map
