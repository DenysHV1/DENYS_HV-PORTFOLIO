(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();function a(){const c=document.querySelector(".media-menu"),n=document.querySelector(".burger-menu"),d=document.querySelector(".close-media-button"),r=document.body;n.addEventListener("click",()=>{c.classList.add("is-open"),r.style.overflow="hidden"}),d.addEventListener("click",()=>{c.classList.remove("is-open"),r.style.overflow="auto"}),c.addEventListener("click",o=>{o.target===o.currentTarget&&(c.classList.remove("is-open"),r.style.overflow="auto")}),window.addEventListener("load",()=>{localStorage.getItem("theme")==="dark"&&(r.classList.add("dark-theme"),e.checked=!0)});const e=document.getElementById("switch");e.addEventListener("change",function(){e.checked?(r.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(r.classList.remove("dark-theme"),localStorage.setItem("theme","light"))});const t=document.querySelectorAll(".menu-link");t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(i=>i.classList.remove("active")),o.classList.add("active"),sessionStorage.setItem("activeLink",o.textContent)})}),document.addEventListener("DOMContentLoaded",()=>{const o=sessionStorage.getItem("activeLink");o&&t.forEach(i=>{i.textContent===o&&i.classList.add("active")})});const s=document.querySelectorAll(".header-logo");console.log(s),s.forEach(o=>{o.addEventListener("click",()=>{sessionStorage.removeItem("activeLink")})})}export{a as h};
//# sourceMappingURL=header-B4c5GArV.js.map
