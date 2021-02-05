import {Popup} from './Popup.js';
class PopupWithImage extends Popup {

  constructor(popup_selector, photonode, photoname) {
    super(popup_selector);
    this._popup = popup_selector;
    this._photonode = photonode;
    this._name = photoname;
    this.open =  this.open.bind(this);
  };

  open(img, name) {
    this._popup.classList.add('popup_visible');
    this._photonode.setAttribute('src', `${img}`);
    this._photonode.setAttribute('alt', `Фото ${name}`);
    this._name.textContent = name;
    document.addEventListener('keydown',  this._closeByESC );
  };
}
export {PopupWithImage};
