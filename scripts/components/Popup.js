import { esc } from './Constants.js';

class Popup {
  constructor(popup_selector) {
    this._popup = popup_selector;
    this.close = this.close.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this._closeByESC= this._closeByESC.bind(this);
    this._closebutton = this._popup.querySelector('.button_close');
    this._overlay = this._popup.querySelector('.popup__overlay');

  }
  open() {
    this._popup.classList.add('popup_visible');
    document.addEventListener('keydown',  this._closeByESC );
  }

  close() {
    this._popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', this._closeByESC );
  }

  _closeByESC(event) {
    const key = event.key;
    if (key === esc) {

      this.close();
    }
  }
  setEventListeners() {
    this._closebutton.addEventListener('click', () => { this.close() });
    this._overlay.addEventListener('click', () => { this.close();});

  }
};

export { Popup };
