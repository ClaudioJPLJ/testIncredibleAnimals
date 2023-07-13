/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scrip/animFaq.js":
/*!**************************!*\
  !*** ./scrip/animFaq.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ faqAnim)\n/* harmony export */ });\nfunction faqAnim() {\n  const classElement = 'opened';\n  const receiveDt = document.querySelectorAll('#faq dt');\n  const receiveDd = document.querySelectorAll('#faq dd');\n  receiveDd[0].classList.add(classElement);\n  receiveDt[0].classList.add(classElement);\n\n  receiveDt.forEach((element, index) => {\n    element.addEventListener('click', () => {\n      receiveDd[index].classList.toggle(classElement);\n      receiveDt[index].classList.toggle(classElement);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/animFaq.js?");

/***/ }),

/***/ "./scrip/animNumbers.js":
/*!******************************!*\
  !*** ./scrip/animNumbers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ numbersAnimation)\n/* harmony export */ });\nfunction numbersAnimation() {\n  const receiveNumbers = document.querySelectorAll('span[data-numbers]');\n  let count = 1;\n  const observer = new MutationObserver(() => {\n    receiveNumbers.forEach(el => {\n      const finalNumber = el.innerText;\n      const timerForNumbers = setInterval(() => {\n        el.innerText = count;\n        count += Math.floor((finalNumber / 400));\n        if (count >= finalNumber) {\n          el.innerText = finalNumber;\n          clearInterval(timerForNumbers);\n        }\n      }, 25);\n    });\n    observer.disconnect();\n  });\n  const receiveNumbersParent = document.querySelector('#numbersContainer');\n  observer.observe(receiveNumbersParent, { attributes: true });\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/animNumbers.js?");

/***/ }),

/***/ "./scrip/dropDown.js":
/*!***************************!*\
  !*** ./scrip/dropDown.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropDownMenu)\n/* harmony export */ });\nfunction dropDownMenu() { // this is a function for mobile user\n  const receiveDropMenus = document.querySelectorAll('[data-dropMenu]');\n  const activeMenu = {\n    handleEvent(event) {\n      event.preventDefault();\n      event.target.hasAttribute('data-dropDownMenu') ? this.element.children[1].style.display = 'block' : this.element.children[1].style.display = 'none';\n    }\n  };\n  receiveDropMenus.forEach((element) => {\n    ['touchstart', 'click'].forEach(userEvent => {\n      element.addEventListener(userEvent, activeMenu);\n      document.querySelector('#grid-container').addEventListener(userEvent, activeMenu);\n    });\n    activeMenu.element = element;\n  });\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/dropDown.js?");

/***/ }),

/***/ "./scrip/fetchAnimal.js":
/*!******************************!*\
  !*** ./scrip/fetchAnimal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _animNumbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animNumbers.js */ \"./scrip/animNumbers.js\");\n\n\nasync function fetchAnimals() {\n  const receiveAnimalsList = document.querySelectorAll('[data-numbers]');\n  const pushJsonAnimals = await (await fetch('../animalsCount.json')).json();\n  receiveAnimalsList.forEach((atualElement, index) => {\n    atualElement.innerText = pushJsonAnimals[index].count;\n  });\n  (0,_animNumbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/fetchAnimal.js?");

/***/ }),

/***/ "./scrip/fetchBitcoinPrice.js":
/*!************************************!*\
  !*** ./scrip/fetchBitcoinPrice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ receiveBitCoinValue)\n/* harmony export */ });\nasync function receiveBitCoinValue() {\n  const receiveDonationElement = document.querySelector('[data-bitCoinDonation]');\n  try {\n    const uptadedValue = await (await fetch('https://blockchain.info/ticker')).json();\n    const donationValue = (15 / uptadedValue.BRL.sell).toFixed(6);\n    receiveDonationElement.innerHTML = `Doe <span>${donationValue}</span> bitcoins para nos ajudar em nossa missão!`;\n  } catch (error) {\n    console.log('Problemas na API bitcoin...');\n    receiveDonationElement.remove();\n  }\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/fetchBitcoinPrice.js?");

/***/ }),

/***/ "./scrip/funcionamento.js":
/*!********************************!*\
  !*** ./scrip/funcionamento.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openingHours)\n/* harmony export */ });\nfunction openingHours() {\n  const receiveElementHours = document.querySelector('[data-opTime]');\n  const hours = new Date();\n  const itsTime = hours.getHours >= 8 && hours.getHours < 18;\n  const itsWorkDay = hours.getDay !== 0 && hours.getDay !== 6;\n\n  if (itsTime && itsWorkDay) {\n    receiveElementHours.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/funcionamento.js?");

/***/ }),

/***/ "./scrip/imagesDescription.js":
/*!************************************!*\
  !*** ./scrip/imagesDescription.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ imagesAnim)\n/* harmony export */ });\nfunction imagesAnim() {\n  const images = document.querySelectorAll('#animals ul img');\n  const descriptions = document.querySelectorAll('#animals-description section');\n  descriptions[0].classList.add('ativo');\n  const clickImg = (ev) => {\n    descriptions.forEach(el => {\n      el.classList.remove('ativo');\n    });\n\n    descriptions[ev.target.id].classList.add('ativo');\n  };\n\n  let countForId = 0;\n  images.forEach(el => {\n    el.setAttribute('id', countForId++);\n    el.addEventListener('click', clickImg);\n  });\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/imagesDescription.js?");

/***/ }),

/***/ "./scrip/menu-mobile.js":
/*!******************************!*\
  !*** ./scrip/menu-mobile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\nfunction menuMobile() {\n  const receiveMenuClick = document.querySelector('[data-menuMobile]');\n  const receiveMenu = document.querySelector('[data-menumobile] + ul');\n  const menuClicked = () => {\n    [receiveMenu, receiveMenuClick].forEach((element) => {\n      element.classList.toggle('active');\n    });\n  };\n\n  if (receiveMenuClick) {\n    ['click', 'touchstart'].forEach(eventListener => {\n      receiveMenuClick.addEventListener(eventListener, menuClicked);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/menu-mobile.js?");

/***/ }),

/***/ "./scrip/modal.js":
/*!************************!*\
  !*** ./scrip/modal.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modalFunction)\n/* harmony export */ });\n/* eslint-disable no-unused-expressions */\nfunction modalFunction() {\n  const receiveOpenButton = document.querySelector('[data-modal=\"openModal\"]');\n  const receiveModalContainer = document.querySelector('[data-modal=\"modalContainer\"]');\n  const receiveCloseModalButton = document.querySelector('button[data-modal=\"fechar\"]');\n  const isActiveModal = (event) => {\n    event.preventDefault();\n    receiveModalContainer.classList.toggle('active');\n  };\n\n  if (receiveOpenButton && receiveModalContainer && receiveCloseModalButton) {\n    receiveOpenButton.addEventListener('click', isActiveModal);\n    receiveCloseModalButton.addEventListener('click', isActiveModal);\n    receiveModalContainer.addEventListener('click', (event) => {\n      event.target === receiveModalContainer ? receiveModalContainer.classList.remove('active') : null;\n    });\n  }\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/modal.js?");

/***/ }),

/***/ "./scrip/script.js":
/*!*************************!*\
  !*** ./scrip/script.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth.js */ \"./scrip/smooth.js\");\n/* harmony import */ var _imagesDescription_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagesDescription.js */ \"./scrip/imagesDescription.js\");\n/* harmony import */ var _animFaq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animFaq.js */ \"./scrip/animFaq.js\");\n/* harmony import */ var _scrollAnim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollAnim.js */ \"./scrip/scrollAnim.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./scrip/modal.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.js */ \"./scrip/tooltip.js\");\n/* harmony import */ var _dropDown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropDown.js */ \"./scrip/dropDown.js\");\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-mobile.js */ \"./scrip/menu-mobile.js\");\n/* harmony import */ var _funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./funcionamento.js */ \"./scrip/funcionamento.js\");\n/* harmony import */ var _fetchAnimal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetchAnimal.js */ \"./scrip/fetchAnimal.js\");\n/* harmony import */ var _fetchBitcoinPrice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetchBitcoinPrice.js */ \"./scrip/fetchBitcoinPrice.js\");\n/* eslint-disable import/no-extraneous-dependencies */\n\n\n\n\n\n\n\n\n\n\n\n\nconst RequestSmooth = new _smooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('a[href^=\"#\"]', { behavior: 'smooth', block: 'start' });\nRequestSmooth.init();\n\n(0,_imagesDescription_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_animFaq_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_scrollAnim_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_dropDown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_fetchAnimal_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_fetchBitcoinPrice_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/script.js?");

/***/ }),

/***/ "./scrip/scrollAnim.js":
/*!*****************************!*\
  !*** ./scrip/scrollAnim.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollAnim)\n/* harmony export */ });\nfunction scrollAnim() {\n  function requireAnim() {\n    const receiveElements = document.querySelectorAll('.js-scroll');\n    const calcHeight = window.innerHeight * 0.7;\n    receiveElements.forEach(element => {\n      if (element.getBoundingClientRect().top <= calcHeight) {\n        element.classList.add('ativo');\n      }\n    });\n  }\n  window.addEventListener('scroll', requireAnim);\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/scrollAnim.js?");

/***/ }),

/***/ "./scrip/smooth.js":
/*!*************************!*\
  !*** ./scrip/smooth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScrol)\n/* harmony export */ });\nclass SmoothScrol {\n  constructor(links, options) {\n    this.links = links;\n    this.options = options;\n  }\n\n  addEvent(options = { behavior: 'smooth', block: 'start' }) {\n    const necessaryLinks = document.querySelectorAll(this.links);\n    necessaryLinks.forEach(el => {\n      el.addEventListener('click', (ev) => {\n        ev.preventDefault();\n        const clickedHref = ev.target.getAttribute('href');\n        const targetSection = document.querySelector(clickedHref);\n        targetSection.scrollIntoView(options);\n      });\n    });\n  }\n\n  init() {\n    if (this.links) {\n      this.addEvent(this.options);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/smooth.js?");

/***/ }),

/***/ "./scrip/tooltip.js":
/*!**************************!*\
  !*** ./scrip/tooltip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toolTipFunction)\n/* harmony export */ });\n/* eslint-disable no-use-before-define */\nfunction toolTipFunction() {\n  const receiveToolTips = document.querySelectorAll('[data-toolTip]');\n  const mouseMove = {\n    handleEvent(event) {\n      this.elementCreated.style.top = `${event.offsetY + 20}px`;\n      this.elementCreated.style.left = `${event.offsetX + 20}px`;\n    }\n  };\n  const removeTooltipBox = {\n    handleEvent() {\n      this.createdElement.remove();\n      this.parentElement.addEventListener('mouseover', isMouseOver);\n      this.parentElement.removeEventListener('mousemove', mouseMove);\n      this.parentElement.removeEventListener('mouseleave', removeTooltipBox);\n    }\n  };\n\n  function isMouseOver() {\n    this.addEventListener('mouseleave', removeTooltipBox);\n    this.addEventListener('mousemove', mouseMove);\n    const createElement = createToolTipBox(this);\n    removeTooltipBox.createdElement = createElement;\n    removeTooltipBox.parentElement = this;\n  }\n\n  receiveToolTips.forEach(element => {\n    element.addEventListener('mouseover', isMouseOver);\n  });\n\n  const createToolTipBox = parentElement => {\n    const elementCreate = document.createElement('div');\n    parentElement.appendChild(elementCreate).classList.add('tooltip-box');\n    elementCreate.innerHTML = parentElement.getAttribute('aria-label');\n    mouseMove.elementCreated = elementCreate;\n    parentElement.removeEventListener('mouseover', isMouseOver);\n    return elementCreate;\n  };\n}\n\n\n//# sourceURL=webpack://0302-html-e-css-do-projeto/./scrip/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scrip/script.js");
/******/ 	
/******/ })()
;