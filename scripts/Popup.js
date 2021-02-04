import { esc } from './Constants.js';

class Popup {
  constructor(popup_selector) {
    this._Popup = popup_selector;
    this.close = this.close.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this._closeByESC= this._closeByESC.bind(this);
    this._Closebutton = this._Popup.querySelector('.button_close');
    this._Overlay = this._Popup.querySelector('.popup__overlay');

  }
  open() {
    this._Popup.classList.add('popup_visible');
    document.addEventListener('keydown',  this._closeByESC );
  }

  close() {
    this._Popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', this._closeByESC );
  }

  _closeByESC(event) {
    const key = event.key;
    if (key === esc) {

      this.close();
    }
  }
  setEventListeners() {
    this._Closebutton.addEventListener('click', () => { this.close() });
    this._Overlay.addEventListener('click', () => { this.close();});

  }
};

export { Popup };
