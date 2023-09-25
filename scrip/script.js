/* eslint-disable import/no-extraneous-dependencies */
import SmoothScroll from './smooth.js';
import ImagesAnim from './imagesDescription.js';
import AccordionAnimation from './animFaq.js';
import ModalFunction from './modal.js';
import ToolTipFunction from './tooltip.js';
import ScrollAnim from './scrollAnim.js';
// eslint-disable-next-line import/no-unresolved
import DropdownMenu from './dropdown.js';
import MenuMobile from './menu-mobile.js';
import OpeningHours from './funcionamento.js';
import FetchAnimals from './fetchAnimal.js';
import receiveBitCoinValue from './fetchBitcoinPrice.js';
import Slide from './slide-configs.js';

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

const requestdropDown = new DropdownMenu('[data-dropMenu]', '[data-hiddenMenu]');
requestdropDown.init();

const requestMenuMobile = new MenuMobile('[data-menuMobile]', '[data-menumobile] + ul', '[data-menu-mobile-container]');
requestMenuMobile.init();

const requestOpeningHours = new OpeningHours('[data-opTime]');
requestOpeningHours.init();

const slide = new Slide('#photosContainer', '#photoPicker');
slide.init();
