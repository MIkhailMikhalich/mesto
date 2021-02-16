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

    const inputList = this._form.querySelectorAll(".popup__input")
    return {inputList};

  }

  setEventListeners() {

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popup.querySelector(".popup__save-button").textContent="Сохранить..."
    });

    super.setEventListeners();
  }
}
export { PopupWithForm };
