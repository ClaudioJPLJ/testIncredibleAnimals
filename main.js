(()=>{"use strict";new class{constructor(e,t){this.links=e,this.options=t}addEvent(e={behavior:"smooth",block:"start"}){document.querySelectorAll(this.links).forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();const n=t.target.getAttribute("href");document.querySelector(n).scrollIntoView(e)}))}))}init(){this.links&&this.addEvent(this.options)}}('a[href^="#"]',{behavior:"smooth",block:"start"}).init(),new class{constructor(e,t,n){this.eventElements=e,this.CSSclasses=n,this.targetElements=t,this.addClassName={handleEvent(e){this.already.join("").split(" ").forEach((t=>{e.target.classList.toggle(t),e.target.nextElementSibling.classList.toggle(t)}))},already:[this.CSSclasses]}}addEvent(e){document.querySelectorAll(e).forEach((e=>{e.addEventListener("click",this.addClassName)}))}init(){const{eventElements:e}=this;e&&this.CSSclasses&&this.addEvent(e)}}("#faq dt","#faq dd","opened").init(),function(){const e=document.querySelectorAll("#animals ul img"),t=document.querySelectorAll("#animals-description section");t[0].classList.add("ativo");const n=e=>{t.forEach((e=>{e.classList.remove("ativo")})),t[e.target.id].classList.add("ativo")};let o=0;e.forEach((e=>{e.setAttribute("id",o++),e.addEventListener("click",n)}))}(),window.addEventListener("scroll",(function(){const e=document.querySelectorAll(".js-scroll"),t=.7*window.innerHeight;e.forEach((e=>{e.getBoundingClientRect().top<=t&&e.classList.add("ativo")}))})),function(){const e=document.querySelector('[data-modal="openModal"]'),t=document.querySelector('[data-modal="modalContainer"]'),n=document.querySelector('button[data-modal="fechar"]'),o=e=>{e.preventDefault(),t.classList.toggle("active")};e&&t&&n&&(e.addEventListener("click",o),n.addEventListener("click",o),t.addEventListener("click",(e=>{e.target===t&&t.classList.remove("active")})))}(),function(){const e=document.querySelectorAll("[data-toolTip]"),t={handleEvent(e){this.elementCreated.style.top=`${e.offsetY+20}px`,this.elementCreated.style.left=`${e.offsetX+20}px`}},n={handleEvent(){this.createdElement.remove(),this.parentElement.addEventListener("mouseover",o),this.parentElement.removeEventListener("mousemove",t),this.parentElement.removeEventListener("mouseleave",n)}};function o(){this.addEventListener("mouseleave",n),this.addEventListener("mousemove",t);const e=s(this);n.createdElement=e,n.parentElement=this}e.forEach((e=>{e.addEventListener("mouseover",o)}));const s=e=>{const n=document.createElement("div");return e.appendChild(n).classList.add("tooltip-box"),n.innerHTML=e.getAttribute("aria-label"),t.elementCreated=n,e.removeEventListener("mouseover",o),n}}(),function(){const e=document.querySelectorAll("[data-dropMenu]"),t={handleEvent(e){e.preventDefault(),e.target.hasAttribute("data-dropDownMenu")?this.element.children[1].style.display="block":this.element.children[1].style.display="none"}};e.forEach((e=>{["touchstart","click"].forEach((n=>{e.addEventListener(n,t),document.querySelector("#grid-container").addEventListener(n,t)})),t.element=e}))}(),function(){const e=document.querySelector("[data-menuMobile]"),t=document.querySelector("[data-menumobile] + ul"),n=()=>{[t,e].forEach((e=>{e.classList.toggle("active")}))};e&&["click","touchstart"].forEach((t=>{e.addEventListener(t,n)}))}(),function(){const e=document.querySelector("[data-opTime]"),t=new Date,n=t.getHours>=8&&t.getHours<18,o=0!==t.getDay&&6!==t.getDay;n&&o&&e.classList.add("aberto")}(),async function(){const e=document.querySelectorAll("[data-numbers]"),t=await(await fetch("../animalsCount.json")).json();e.forEach(((e,n)=>{e.innerText=t[n].count})),function(){const e=document.querySelectorAll("span[data-numbers]");let t=1;const n=new MutationObserver((()=>{e.forEach((e=>{const n=e.innerText,o=setInterval((()=>{e.innerText=t,t+=Math.floor(n/400),t>=n&&(e.innerText=n,clearInterval(o))}),25)})),n.disconnect()})),o=document.querySelector("#numbersContainer");n.observe(o,{attributes:!0})}()}(),async function(){const e=document.querySelector("[data-bitCoinDonation]");try{const t=(15/(await(await fetch("https://blockchain.info/ticker")).json()).BRL.sell).toFixed(6);e.innerHTML=`Doe <span>${t}</span> bitcoins para nos ajudar em nossa missão!`}catch(t){console.log("Problemas na API bitcoin..."),e.remove()}}()})();