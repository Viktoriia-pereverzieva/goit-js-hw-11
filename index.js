import{a as f,S as p,i as n}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="53514626-0b1a9606e501b3bd45a679ad3",m="https://pixabay.com/api/";function y(i){return f.get(m,{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250,captions:!1});function h(i){const o=i.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){u.classList.add("visible")}function v(){u.classList.remove("visible")}const l=document.querySelector("#form"),q=document.querySelector("#input");l.addEventListener("submit",i=>{i.preventDefault();const o=q.value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a query",position:"topRight"});return}b(),L(),y(o).then(e=>{if(!e.hits||e.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query.",position:"topRight"});return}h(e.hits)}).catch(e=>{console.error("Error fetching images:",e),n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{v()}),l.reset()});
//# sourceMappingURL=index.js.map
