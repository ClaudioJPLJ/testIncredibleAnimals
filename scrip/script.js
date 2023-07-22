/* eslint-disable import/no-extraneous-dependencies */
import SmoothScroll from './smooth.js';
import ImagesAnim from './imagesDescription.js';
import AccordionAnimation from './animFaq.js';
import ModalFunction from './modal.js';
import ToolTipFunction from './tooltip.js';
import scrollAnim from './scrollAnim.js';
import dropDownMenu from './dropDown.js';
import menuMobile from './menu-mobile.js';
import openingHours from './funcionamento.js';
import FetchAnimals from './fetchAnimal.js';
import receiveBitCoinValue from './fetchBitcoinPrice.js';

const RequestSmooth = new SmoothScroll('a[href^="#"]', { behavior: 'smooth', block: 'start' });
RequestSmooth.init();

const RequestAccordion = new AccordionAnimation('#faq dt', 'opened');
RequestAccordion.init();

const RequestNavImg = new ImagesAnim('[data-imagesAnim] img', '[data-descriptionAnim] section', ['ativo', 'aberto']);
RequestNavImg.init();

const RequestModal = new ModalFunction('[data-openModal]', '[data-modalContainer]', '[data-closeModal');
RequestModal.init();

const RequestTooltip = new ToolTipFunction('[data-toolTip]');
RequestTooltip.init();

const RequestFetchAnimals = new FetchAnimals('span[data-numbers]');
RequestFetchAnimals.init();

receiveBitCoinValue('[data-bitCoinDonation]', 'https://blockchain.info/ticker');

scrollAnim();
dropDownMenu();
menuMobile();
openingHours();
