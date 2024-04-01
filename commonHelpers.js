import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function d(){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"43138394-89c4115d2b9d73778d19dc685",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return p(),fetch(t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}function f(s){s.length||c.error({message:"❌ Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="";const t=s.map(r=>`<li class="image-item">
      <a href="${r.largeImageURL}">
        <img
          src="${r.webformatURL}"
          data-source="${r.largeImageURL}"
          alt="${r.tags}"
        />
        <ul class="image-description">
          <li>
            <h3>Likes</h3>
            <p><b>${r.likes}</b></p>
          </li>
          <li>
            <h3>Views</h3>
            <p><b>${r.views}</b></p>
          </li>
          <li>
            <h3>Comments</h3>
            <p><b>${r.comments}</b></p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p><b>${r.downloads}</b></p>
          </li>
        </ul>
      </a>
    </li>`).join("");l.insertAdjacentHTML("beforeend",t),new u(".gallery a",{captionsData:"alt"}).refresh()}const l=document.querySelector("ul.gallery");let a;const h=document.querySelector("form");document.querySelector("input");document.querySelector("button");const m=document.querySelector(".loading"),p=()=>{m.style.display="flex"};h.addEventListener("submit",s=>{s.preventDefault(),a=s.target.elements.search.value.trim(),a.length||(l.innerHTML="",c.info({message:"Please fill the field"})),d().then(t=>f(t.hits)).catch(t=>console.log(t))});
//# sourceMappingURL=commonHelpers.js.map
