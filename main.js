(()=>{var t={61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),s=new O(n||[]);return a(i,"_invoke",{value:S(t,r,s)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var v={};function p(){}function m(){}function y(){}var g={};h(g,c,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(T([])));E&&E!==r&&i.call(E,c)&&(g=E);var w=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,s,c){var u=d(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==n(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function T(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:M}}function M(){return{value:void 0,done:!0}}return m.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=h(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(L.prototype),h(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),h(w,l,"Generator"),h(w,c,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function s(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var c=function(){function t(e,r,o){n(this,t),this.images=e,this.descriptions=r,this.classNames=o}return s(t,[{key:"addEvents",value:function(){var t=document.querySelectorAll(this.images),r=document.querySelectorAll(this.descriptions),n=this.classNames;t.forEach((function(t,o){t.addEventListener("click",(function(){var t;r.forEach((function(t){var r;(r=t.classList).remove.apply(r,e(n))})),(t=r[o].classList).add.apply(t,e(n))}))}))}},{key:"init",value:function(){var t=this.images,e=this.descriptions,r=this.classNames;return t&&e&&r&&this.addEvents(),this}}]),t}();var u=function(){function t(e,r,o){n(this,t),this.openButton=document.querySelector(e),this.modalContainer=document.querySelector(r),this.closeModalButton=document.querySelector(o)}return s(t,[{key:"addEvents",value:function(){var t=this.openButton,e=this.closeModalButton,r=this.modalContainer;[t,e].forEach((function(t){return t.addEventListener("click",(function(t){t.preventDefault(),r.classList.toggle("active")}))})),r.addEventListener("click",(function(t){t.target===r&&r.classList.remove("active")}))}},{key:"init",value:function(){return this.openButton&&this.modalContainer&&this.closeModalButton&&this.addEvents(),this}}]),t}();function l(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){l(i,n,o,a,s,"next",t)}function s(t){l(i,n,o,a,s,"throw",t)}a(void 0)}))}}var f=r(687),d=r.n(f);class v{constructor(t,e){this.receiveNumbers=t,this.observedElement=document.querySelector(e)}Observe(){const t=new MutationObserver((()=>{t.disconnect();let e=1;this.receiveNumbers.forEach((t=>{const r=+t.innerText,n=setInterval((()=>{t.innerText=e,e+=Math.floor(r/350),e>=r&&(t.innerText=r,clearInterval(n))}),25)}))}));t.observe(this.observedElement,{attributes:!0})}init(){return this.observedElement&&this.receiveNumbers.length&&this.Observe(),this}}var p,m,y,g=function(){function t(e){n(this,t),this.receiveAnimalsList=document.querySelectorAll(e)}var e;return s(t,[{key:"pushJsonAnimals",value:(e=h(d().mark((function t(){var e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("../animalsCount.json");case 2:return t.next=4,t.sent.json();case 4:e=t.sent,this.assignNumber(e);case 6:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"assignNumber",value:function(t){this.receiveAnimalsList.forEach((function(e,r){e.innerText=t[r].count})),new v(this.receiveAnimalsList,"#numbersContainer").init()}},{key:"init",value:function(){return this.receiveAnimalsList&&this.pushJsonAnimals(),this}}]),t}();function b(){return(b=h(d().mark((function t(){var e,r,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("[data-bitCoinDonation]"),t.prev=1,t.next=4,fetch("https://blockchain.info/ticker");case 4:return t.next=6,t.sent.json();case 6:r=t.sent,n=(15/r.BRL.sell).toFixed(6),e.innerHTML="Doe <span>".concat(n,"</span> bitcoins para nos ajudar em nossa missão!"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("Problemas na API bitcoin..."),e.remove();case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}new class{constructor(t,e){this.links=t,this.options=e}addEvent(t={behavior:"smooth",block:"start"}){document.querySelectorAll(this.links).forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const r=e.target.getAttribute("href");document.querySelector(r).scrollIntoView(t)}))}))}init(){this.links&&this.addEvent(this.options)}}('a[href^="#"]',{behavior:"smooth",block:"start"}).init(),new class{constructor(t,e){this.eventElements=t,this.CSSclasses=e,this.addClassName={handleEvent(t){this.already.join("").split(" ").forEach((e=>{t.target.classList.toggle(e),t.target.nextElementSibling.classList.toggle(e)}))},already:[this.CSSclasses]}}addEvent(t){document.querySelectorAll(t).forEach((t=>{t.addEventListener("click",this.addClassName)}))}init(){const{eventElements:t}=this;return t&&this.CSSclasses&&this.addEvent(t),this}}("#faq dt","opened").init(),new c("[data-imagesAnim] img","[data-descriptionAnim] section",["ativo","aberto"]).init(),new u("[data-openModal]","[data-modalContainer]","[data-closeModal").init(),new class{constructor(t){this.targetElement=document.querySelectorAll(t)}createToolTipBox(t){const e=document.createElement("div");this.targetElement.forEach((r=>{r.appendChild(e).classList.add("tooltip-box"),e.innerHTML=t.getAttribute("aria-label"),r.removeEventListener("mouseover",this.isMouseOver)})),this.elementCreated=e}mouseMove({offsetX:t,offsetY:e}){t>=window.innerWidth/2?(this.elementCreated.style.top=`${e+40}px`,this.elementCreated.style.left=t/2+"px"):(this.elementCreated.style.top=`${e+40}px`,this.elementCreated.style.left=`${t+40}px`)}removeTooltipBox({currentTarget:t}){this.elementCreated.remove(),t.addEventListener("mouseover",this.isMouseOver),t.removeEventListener("mousemove",this.mouseMove),t.removeEventListener("mouseleave",this.removeTooltipBox)}isMouseOver({currentTarget:t,target:e}){Array.from(e.classList).includes("tooltip-box")||(this.createToolTipBox(t),t.addEventListener("mouseleave",this.removeTooltipBox.bind(this)),t.addEventListener("mousemove",this.mouseMove.bind(this)))}addEvent(){this.targetElement.forEach((t=>{t.addEventListener("mouseover",this.isMouseOver.bind(this))}))}init(){return this.targetElement.length&&this.addEvent(),this}}("[data-toolTip]").init(),new g("span[data-numbers]").init(),window.addEventListener("scroll",(function(){var t=document.querySelectorAll(".js-scroll"),e=.7*window.innerHeight;t.forEach((function(t){t.getBoundingClientRect().top<=e&&t.classList.add("ativo")}))})),function(){const t=document.querySelectorAll("[data-dropMenu]"),e={handleEvent(t){t.preventDefault(),t.target.hasAttribute("data-dropDownMenu")?this.element.children[1].style.display="block":this.element.children[1].style.display="none"}};t.forEach((t=>{["touchstart","click"].forEach((r=>{t.addEventListener(r,e),document.querySelector("#grid-container").addEventListener(r,e)})),e.element=t}))}(),p=document.querySelector("[data-menuMobile]"),m=document.querySelector("[data-menumobile] + ul"),y=function(){[m,p].forEach((function(t){t.classList.toggle("active")}))},p&&["click","touchstart"].forEach((function(t){p.addEventListener(t,y)})),function(){const t=document.querySelector("[data-opTime]"),e=new Date,r=e.getHours>=8&&e.getHours<18,n=0!==e.getDay&&6!==e.getDay;r&&n&&t.classList.add("aberto")}(),function(){b.apply(this,arguments)}()})()})();