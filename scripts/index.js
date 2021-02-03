import '../pages/index.css';
import initialCards from './InitialCards.js';
import Card from './Card.js';
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import { Popup, PopupWithImage, PopupWithForm } from './Popup.js';
import { UserInfo } from './UserInfo.js';
import { Section } from './Section.js';

const placeForm = document.querySelector('#place-form');
const addButtonNode = document.querySelector('.profile__add-button');
const editbuttonNode = document.querySelector('.profile__edit-button');
const popupProfileNode = document.querySelector('#popup');
const popupPhotoImg = document.querySelector('.popup__photo-img');
const popupPhotoName = document.querySelector('.popup__photo-name');
const popupPlaceNode = document.querySelector('#popup-place');
const popupPhotoNode = document.querySelector('#popup-photo');
const profileForm = document.querySelector('#profile-form');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__text');
const nameInput = document.querySelector('.popup__name-input');
const placeNameInput = document.querySelector('.popup__place-name-input');
const infoInput = document.querySelector('.popup__info-input');
const srcInput = document.querySelector('.popup__src-input');
const photoTemplate = document.querySelector('#photocard');
const photocards = document.querySelector('.photocards');

const section = new Section(initialCards, photocards);
const placevalidator = new FormValidator(placeForm, validationConfig);
const profilevalidator = new FormValidator(profileForm, validationConfig);

const popupphoto = new PopupWithImage(popupPhotoNode, popupPhotoImg, popupPhotoName);
const profile = new UserInfo(profileName, profileInfo);
const popupprofile = new PopupWithForm(popupProfileNode, profile);
const popupplace = new PopupWithForm(popupPlaceNode);


placevalidator.enableValidate();
profilevalidator.enableValidate();

function getFilledCard(name, link) {
  const card = new Card(name, link, photoTemplate, popupphoto)
  return card.createCard();
}

function openPopupProfile() {
  const information = profile.getUserInfo()
  nameInput.value = information.name.textContent;
  infoInput.value = information.info.textContent;
}

function submitProfile(profilename, info) {
  profileName.textContent=profilename;
  profileInfo.textContent=info;
};

addButtonNode.addEventListener('click', (event) => {
  event.preventDefault();

  popupplace.open();
  placeNameInput.value = "";
  srcInput.value = "";
  placevalidator.resetValidation();
  popupplace.setEvetListeners();

});

initialCards.forEach(
  function (element) {
    section.addItem(getFilledCard(element.name, element.link));
  });

popupprofile._Form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const properties = popupprofile._GetInputValues();
  submitProfile(properties[0].value, properties[1].value);
  popupprofile.close();
});

popupplace._Form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const properties = popupplace._GetInputValues();
  section.addItem(getFilledCard(properties[0].value, properties[1].value));
  popupplace.close()
});

editbuttonNode.addEventListener('click', (event) => {
  event.preventDefault();

  openPopupProfile();
  popupprofile.open();
  popupprofile.setEvetListeners();
  profilevalidator.resetValidation();
});







