import { getFilledCard, profileName, profileInfo, addToGrid } from './index.js';
class Popup {
  constructor(popup_selector) {
    this._popup = popup_selector;
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

    this.name.value = profileName.textContent;
    this.info.value = profileInfo.textContent;
  }
  _submitProfile(profilename, info) {
    profileName.textContent = profilename;
    profileInfo.textContent = info;
  };
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
    const form = this._popup.querySelector('.popup__form');
    form.addEventListener('submit', (evt) => {
      debugger
      evt.preventDefault();

      if (this._popup.classList.contains('profile')) {
        this._submitProfile(this._getInputValues()[0],this._getInputValues()[1]);
        this.close();

      }
      if (this._popup.classList.contains('place')) {

        addToGrid(getFilledCard(this._getInputValues()[0],this._getInputValues()[1]));
        this.close();

      }
    }
    )
  }
};

export { Popup, PopupWithImage, PopupWithForm };
