/* eslint-disable import/no-extraneous-dependencies */
import SmoothScroll from './smooth.js';
import ImagesAnim from './imagesDescription.js';
import AccordionAnimation from './animFaq.js';
import ModalFunction from './modal.js';
import scrollAnim from './scrollAnim.js';
import toolTipFunction from './tooltip.js';
import dropDownMenu from './dropDown.js';
import menuMobile from './menu-mobile.js';
import openingHours from './funcionamento.js';
import fetchAnimals from './fetchAnimal.js';
import receiveBitCoinValue from './fetchBitcoinPrice.js';

const RequestSmooth = new SmoothScroll('a[href^="#"]', { behavior: 'smooth', block: 'start' });
RequestSmooth.init();

const RequestAccordion = new AccordionAnimation('#faq dt', 'opened');
RequestAccordion.init();

const RequestNavImg = new ImagesAnim('[data-imagesAnim] img', '[data-descriptionAnim] section', ['ativo', 'aberto']);
RequestNavImg.init();

const RequestModal = new ModalFunction('[data-openModal]', '[data-modalContainer]', '[data-closeModal');
RequestModal.init();

scrollAnim();
toolTipFunction();
dropDownMenu();
menuMobile();
openingHours();
fetchAnimals();
receiveBitCoinValue();
