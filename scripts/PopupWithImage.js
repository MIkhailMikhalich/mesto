import {Popup} from './Popup.js';
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
export {PopupWithImage};
