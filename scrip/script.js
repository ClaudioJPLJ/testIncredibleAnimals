/* eslint-disable import/no-extraneous-dependencies */
import SmoothScroll from './smooth.js';
import ImagesAnim from './imagesDescription.js';
import AccordionAnimation from './animFaq.js';
import ModalFunction from './modal.js';
import ToolTipFunction from './tooltip.js';
import ScrollAnim from './scrollAnim.js';
import DropdownMenu from './dropdown.js';
import menuMobile from './menu-mobile.js';
import openingHours from './funcionamento.js';
import FetchAnimals from './fetchAnimal.js';
import receiveBitCoinValue from './fetchBitcoinPrice.js';

const requestSmooth = new SmoothScroll('a[href^="#"]', { behavior: 'smooth', block: 'start' });
requestSmooth.init();

const requestAccordion = new AccordionAnimation('#faq dt', 'opened');
requestAccordion.init();

const requestNavImg = new ImagesAnim('[data-imagesAnim] img', '[data-descriptionAnim] section', ['ativo', 'aberto']);
requestNavImg.init();

const requestModal = new ModalFunction('[data-openModal]', '[data-modalContainer]', '[data-closeModal');
requestModal.init();

const requestTooltip = new ToolTipFunction('[data-toolTip]');
requestTooltip.init();

const requestFetchAnimals = new FetchAnimals('span[data-numbers]');
requestFetchAnimals.init();

receiveBitCoinValue('[data-bitCoinDonation]', 'https://blockchain.info/ticker');

const requestScrollAnim = new ScrollAnim('[data-scroll="scrollAnim"]');
requestScrollAnim.init();

const requestdropDown = new DropdownMenu('[data-dropMenu]');
requestdropDown.init();

menuMobile();
openingHours();
