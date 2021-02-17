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
    super.open();
    this._photonode.setAttribute('src', `${img}`);
    this._photonode.setAttribute('alt', `Фото ${name}`);
    this._name.textContent = name;
  };
}
export {PopupWithImage};
