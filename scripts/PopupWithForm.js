import {Popup} from './Popup.js';

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
export {PopupWithForm};
