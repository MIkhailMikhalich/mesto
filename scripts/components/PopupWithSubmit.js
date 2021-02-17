import {Popup} from './Popup.js';
class PopupWithSubmit extends Popup {
  constructor(popup_selector,func) {
    super(popup_selector);
    this._popup = popup_selector;
    this.submitButton = this._popup.querySelector(".popup__save-button");
    this.setEventListeners=this.setEventListeners.bind(this);
    this._id;
    this._target;
    this._func = func;
  }
  open(id,currentTarget)
  {
    super.open()
    this._id = id;
    this._target = currentTarget
  }
  setEventListeners()
  {
    super.setEventListeners();
    this.submitButton.addEventListener('click',()=>{
     this._func(this._id,this._target),this.submitButton.textContent="Да..."});
  }
}
export {PopupWithSubmit};
