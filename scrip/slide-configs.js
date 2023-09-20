import debounce from './debounce.js';

export default class Slide {
  constructor(slide, thumbImages, prevNextbuttons) {
    this.slide = document.querySelector(slide);
    this.slideImages = [...this.slide.children];
    this.photoPicker = document.querySelector(thumbImages);
    this.thumbImages = [...this.photoPicker.children];
    this.prevNextButtons = document.querySelectorAll(prevNextbuttons);
  }

  // config and scroll functions
  catchDistances() {
    const slideMargin = this.slide.offsetLeft;
    // pega a margem do slide para não dar diferença de posicionamento
    this.imagesDistances = this.slideImages.map(el => {
      return {
        el, position: el.offsetLeft - slideMargin
      };
    });
  }

  indexNav(index) {
    const lastIndex = this.imagesDistances.length - 1;
    this.imagesIndex = {
      prev: index ? index - 1 : index, // se o index for 0, o valor será falsy
      current: index,
      next: index === lastIndex ? index : index + 1
    };
  }

  moveImage(index) {
    // eslint-disable-next-line max-len
    const alignCenterImages = (this.slide.clientWidth - this.imagesDistances[index].el.clientWidth) / 2;
    // expressão para posicionar imagens ao centro
    this.slide.style.scrollBehavior = 'smooth';
    this.slide.scrollLeft = this.imagesDistances[index].position - alignCenterImages;
    // pega a posição de determinado elemento com base no index
    this.indexNav(index); // atualiza o index de acordo com arg passado para este método
    this.resizeElement(this.imagesIndex.current);
    // passa como argumento o index atual após atualizar o imagesIndex
    this.slide.style.scrollBehavior = 'auto';
    // remove o smooth scroll p/ o usuário poder mover a imagem
  }

  resizeElement(index) {
    const activeClass = 'visible';
    this.imagesDistances.forEach(object => object.el.classList.remove(activeClass));
    this.thumbImages.forEach(el => el.classList.remove(activeClass));
    // remove as classes de todos os elementos antes de adicionar em um novo
    this.imagesDistances[index].el.classList.add(activeClass);
    this.thumbImages[index].classList.add(activeClass);
  }

  isGrabbing(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.add('grab');
    this.isMobile = ev.type.startsWith('touch');
    this.isMobile
      ? this.initalClick = ev.changedTouches[0].screenX
      : this.initalClick = ev.pageX; // para calcular a diferença do pageX no mousemove
    this.lastPosition = this.slide.scrollLeft;
    ['mousemove', 'touchmove'].forEach(event => this.slide.addEventListener(event, this.isMoving));
  }

  isMoving(event) {
    const movement = this.isMobile ? event.changedTouches[0].screenX : event.pageX;
    this.clickDifference = (movement - this.initalClick) * 0.9;
    // this utilizado para o isDroped poder ter acesso
    this.slide.scrollLeft = this.lastPosition - this.clickDifference;
    // cálculo -> última posição do scroll - pageX atualizado a cada movimento -
    // pageX do click inicial * 0.9
  }

  isDroped() {
    const dragLimit = this.isMobile ? 70 : 130;
    ['mousemove', 'touchmove'].forEach(event => this.slide.removeEventListener(event, this.isMoving));
    if (this.slide.classList.contains('grab')) {
      if (this.clickDifference <= -dragLimit) {
        this.moveImage(this.imagesIndex.next);
      } else if (this.clickDifference >= dragLimit) {
        this.moveImage(this.imagesIndex.prev);
      } else {
        this.moveImage(this.imagesIndex.current);
      }
    }
    this.slide.classList.remove('grab');
  }

  // image picker
  selectThumbnail({ currentTarget }) {
    const clickedIndex = this.thumbImages.indexOf(currentTarget);
    this.moveImage(clickedIndex);
  }

  // next and prev buttons
  previousAndNext({ currentTarget }) {
    const currentCommand = currentTarget.dataset.move;
    currentCommand === 'previous'
      ? this.moveImage(this.imagesIndex.prev)
      : this.moveImage(this.imagesIndex.next);
  }

  addEvents() {
    ['mousedown', 'touchstart'].forEach(event => this.slide.addEventListener(event, this.isGrabbing));
    ['mouseup', 'touchend'].forEach(event => this.slide.addEventListener(event, this.isDroped));
    window.addEventListener('resize', () => {
      this.debounceResize();
    });
    this.thumbImages.forEach(el => el.addEventListener('click', this.selectThumbnail));
    if (this.prevNextButtons) {
      this.prevNextButtons.forEach(el => el.addEventListener('click', this.previousAndNext));
    }
  }

  bindEvents() {
    this.isGrabbing = this.isGrabbing.bind(this);
    this.isMoving = this.isMoving.bind(this);
    this.isDroped = this.isDroped.bind(this);
    this.catchDistances = this.catchDistances.bind(this);
    this.selectThumbnail = this.selectThumbnail.bind(this);
    this.previousAndNext = this.previousAndNext.bind(this);
  }

  init() {
    if (this.thumbImages && this.slide) {
      this.catchDistances();
      this.indexNav(0);
      this.bindEvents();
      this.addEvents();
      this.resizeElement(0);
      this.debounceResize = debounce(() => {
        this.catchDistances();
        setTimeout(() => {
          this.moveImage(this.imagesIndex.current);
        }, 300);
      }, 500);
    }
  }
}
