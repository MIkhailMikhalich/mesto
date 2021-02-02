import { getFilledCard, profile, section } from './index.js';
class Popup {
  constructor(popup_selector) {
    this._popup = popup_selector;
    this.close = this.close.bind(this);
  }
  open() {
    this._popup.classList.add('popup_visible');
  }

  close() {
    this._popup.classList.remove('popup_visible');
  }

  _closeByESC(event) {
    const key = event.key;

    if (key === "Escape") {

      this.close();
    }
  }
  setEvetListeners() {
    const popup = document.querySelector('.popup_visible');
    const closebutton = popup.querySelector('.button_close');
    const overlay = popup.querySelector('.popup__overlay');
    closebutton.addEventListener('click', () => { this.close() });
    document.addEventListener('keydown', (evt) => { this._closeByESC(evt, this._popup) });
    overlay.addEventListener('click', function (currentTarget) {
      const currentpopup = new Popup(currentTarget.currentTarget.parentElement);
      currentpopup.close();
    });

  }
};

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

  };



}

class PopupWithForm extends Popup {
  constructor(popup_selector, form_selector) {
    super(popup_selector);
    this._popup = popup_selector;
    this._form = form_selector;
    this._callSubmit = this._callSubmit.bind(this);
    this.name = this._popup.querySelector('.popup__name-input');
    this.info = this._popup.querySelector('.popup__info-input');
  }
  _getInputValues() {
    if (this._popup.classList.contains('profile')) {
      return [this.name.value, this.info.value];
    }
    if (this._popup.classList.contains('place')) {
      const name = this._popup.querySelector('.popup__place-name-input');
      const src = this._popup.querySelector('.popup__src-input');
      return [name.value, src.value];
    }

  }
  openPopupProfile() {
    const information=profile.getUserInfo()
    this.name.value = information.name.textContent;
    this.info.value = information.info.textContent;
  }
  _submitProfile(profilename, info) {
    profile.setUserInfo(profilename,info);
  };


  removeAllListeners() {
    const popup = document.querySelector('.popup_visible');
    const closebutton = popup.querySelector('.button_close');
    const overlay = popup.querySelector('.popup__overlay');
    closebutton.removeEventListener('click', this.close);
    document.removeEventListener('keydown', this._closeByESC);
    overlay.removeEventListener('click', this.close);
    const form = this._popup.querySelector('.popup__form');
    form.removeEventListener('submit', this._callSubmit);
  }
  _callSubmit(evt) {
    evt.preventDefault();
    const prop = this._getInputValues();
    if (this._popup.classList.contains('profile')) {
      this._submitProfile(prop[0], prop[1]);
    }
    if (this._popup.classList.contains('place')) {

      section.addItem(getFilledCard(prop[0], prop[1]));
    }
    this.close();
    this.removeAllListeners;
  };

  setEvetListeners() {
    const popup = document.querySelector('.popup_visible');
    const closebutton = popup.querySelector('.button_close');
    const overlay = popup.querySelector('.popup__overlay');
    const form = this._popup.querySelector('.popup__form');
    closebutton.addEventListener('click', this.close);
    document.addEventListener('keydown', this._closeByESC);
    overlay.addEventListener('click', this.close);
    form.addEventListener('submit', this._callSubmit);
  }
}
export { Popup, PopupWithImage, PopupWithForm };
