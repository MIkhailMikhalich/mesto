import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popup_selector,handleFormSubmit) {
    super(popup_selector);
    this._popup = popup_selector;
    this._handleFormSubmit =handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._getInputValues = this._getInputValues.bind(this);
    this._inputList=this._form.querySelectorAll('.popup__input');
    this.submitButton = this._popup.querySelector(".popup__save-button");
    this._formValues = {};
    this.setEventListeners=this.setEventListeners.bind(this);

  }
  _getInputValues() {

    this._inputList;
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;

  }

  _resetInput()
  {
    this._inputList;
    this._inputList.forEach(input => input.value="");
  }

  setEventListeners() {

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._resetInput();
      this.submitButton.textContent="Сохранить..."
    });

    super.setEventListeners();
  }
}
export { PopupWithForm };
