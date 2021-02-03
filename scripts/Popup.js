import { esc } from './Constants.js';

class Popup {
  constructor(popup_selector) {
    this._Popup = popup_selector;
    this.close = this.close.bind(this);
    this.setEvetListeners = this.setEvetListeners.bind(this);
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
  setEvetListeners() {
    this._Closebutton.addEventListener('click', () => { this.close() });
    this._Overlay.addEventListener('click', () => { this.close();});

  }
};

class PopupWithImage extends Popup {

  constructor(popup_selector, photonode, photoname) {
    super(popup_selector);
    this._Popup = popup_selector;
    this._Photonode = photonode;
    this._Name = photoname;
    this.open =  this.open.bind(this);
  };

  open(img, name) {
    this._Popup.classList.add('popup_visible');
    this._Photonode.setAttribute('src', `${img}`);
    this._Photonode.setAttribute('alt', `Фото ${name}`);
    this._Name.textContent = name;
    document.addEventListener('keydown',  this._closeByESC );
  };



}

class PopupWithForm extends Popup {
  constructor(popup_selector) {
    super(popup_selector);
    this._Popup = popup_selector;

    this._Form = this._Popup.querySelector('.popup__form');
    this._GetInputValues = this._GetInputValues.bind(this);

  }
  _GetInputValues()
  {

    return this._Form.elements;

  }

  setEvetListeners() {

    this._Closebutton.addEventListener('click', this.close);
    document.addEventListener('keydown', this._closeByESC);
    this._Overlay.addEventListener('click', this.close);
  }
}
export { Popup, PopupWithImage, PopupWithForm };
