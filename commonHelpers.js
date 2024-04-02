import{i as d,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function y(){b();const r=`https://pixabay.com/api/?${new URLSearchParams({key:"43138394-89c4115d2b9d73778d19dc685",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r).then(s=>{if(s.ok)return L(),s.json();throw new Error(s.status)})}function g(o){o.length||d.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML="";const r=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:f,comments:h,downloads:m})=>`<li class="image-item">
      <a href="${e}">
        <img
          src="${n}"
          data-source="${e}"
          alt="${t}"
        />
        <ul class="image-description">
          <li>
            <h3>Likes</h3>
            <p><b>${i}</b></p>
          </li>
          <li>
            <h3>Views</h3>
            <p><b>${f}</b></p>
          </li>
          <li>
            <h3>Comments</h3>
            <p><b>${h}</b></p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p><b>${m}</b></p>
          </li>
        </ul>
      </a>
    </li>`).join("");a.insertAdjacentHTML("beforeend",r),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const a=document.querySelector("ul");let l;const b=()=>{c.style.display="flex"},L=()=>{c.style.display="none"},u=document.querySelector("form"),P=document.querySelector("input"),c=document.querySelector(".loader");c.style.display="none";u.addEventListener("submit",o=>{o.preventDefault(),l=P.value.trim(),l!==""?(y().then(r=>g(r.hits)).catch(r=>console.log(r)),u.reset()):(a.innerHTML="",d.info({message:"Please fill the field"}))});
//# sourceMappingURL=commonHelpers.js.map
