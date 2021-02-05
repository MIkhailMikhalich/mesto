import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popup_selector,handleFormSubmit) {
    super(popup_selector);
    this._popup = popup_selector;
    this._handleFormSubmit =handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._getInputValues = this._getInputValues.bind(this);

    this.setEventListeners=this.setEventListeners.bind(this);

  }
  _getInputValues() {

    const firstInput = this._form.elements.first;
    const secondInput = this._form.elements.second;
    return {first:firstInput.value,second:secondInput.value};

  }

  setEventListeners() {

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });

    super.setEventListeners();
  }
}
export { PopupWithForm };
