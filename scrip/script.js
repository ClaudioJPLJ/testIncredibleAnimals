/* eslint-disable import/no-extraneous-dependencies */
import SmoothScroll from './smooth.js';
import imagesAnim from './imagesDescription.js';
import AccordionAnimation from './animFaq.js';
import scrollAnim from './scrollAnim.js';
import modalFunction from './modal.js';
import toolTipFunction from './tooltip.js';
import dropDownMenu from './dropDown.js';
import menuMobile from './menu-mobile.js';
import openingHours from './funcionamento.js';
import fetchAnimals from './fetchAnimal.js';
import receiveBitCoinValue from './fetchBitcoinPrice.js';

const RequestSmooth = new SmoothScroll('a[href^="#"]', { behavior: 'smooth', block: 'start' });
RequestSmooth.init();

const RequestAccordion = new AccordionAnimation('#faq dt', '#faq dd', 'opened');
RequestAccordion.init();

imagesAnim();
scrollAnim();
modalFunction();
toolTipFunction();
dropDownMenu();
menuMobile();
openingHours();
fetchAnimals();
receiveBitCoinValue();
