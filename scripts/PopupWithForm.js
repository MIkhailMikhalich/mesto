import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popup_selector,handleFormSubmit) {
    super(popup_selector);
    this._Popup = popup_selector;
    this._handleFormSubmit =handleFormSubmit;
    this._Form = this._Popup.querySelector('.popup__form');
    this._getInputValues = this._getInputValues.bind(this);

    this.setEvetListeners=this.setEvetListeners.bind(this);

  }
  _getInputValues() {

    return this._Form;

  }

  setEvetListeners() {
    this._Form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    debugger
    super.setEventListeners();
  }
}
export { PopupWithForm };
