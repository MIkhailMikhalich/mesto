import '../pages/index.css';
import initialCards from './InitialCards.js';
import Card from './Card.js';
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import { Popup, PopupWithImage, PopupWithForm } from './Popup.js';
import {UserInfo} from './UserInfo.js';
import {Section} from './Section.js';
export { popupPhotoImg, popupPhotoName, popupphoto,getFilledCard, profile, section ,photoTemplate,setData};

const placeForm = document.querySelector('#place-form');
const addButtonNode = document.querySelector('.profile__add-button');
const closebuttonNode = document.querySelector('.popup__close-button');
const closePlacebuttonNode = document.querySelector('.popup__place-close-button');
const closePhotobuttonNode = document.querySelector('.popup__photo-close-button');
const editbuttonNode = document.querySelector('.profile__edit-button');
const popupNode = document.querySelector('#popup');
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
const overlays = document.querySelectorAll('.popup__overlay');
const photoTemplate = document.querySelector('#photocard');
const photocards = document.querySelector('.photocards');

const section = new Section (initialCards,photocards);
const placevalidator = new FormValidator(placeForm, validationConfig);
const profilevalidator = new FormValidator(profileForm, validationConfig);
const popupprofile = new PopupWithForm(popupNode);
const popupplace = new PopupWithForm(popupPlaceNode);
const popupphoto = new PopupWithImage(popupPhotoNode, popupPhotoImg, popupPhotoName);
const profile = new UserInfo (profileName,profileInfo);

function setData()
{
  const prop = profile.getUserInfo();
  profileName.textContent= prop.name;
  profileInfo.textContent= prop.info;
}
placevalidator.enableValidate();
profilevalidator.enableValidate();

function getFilledCard(name, link) {
  const card = new Card(name, link, photoTemplate)
  return card.createCard();
}
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

editbuttonNode.addEventListener('click', (event) => {
  event.preventDefault();

  popupprofile.openPopupProfile();
  popupprofile.open();
  popupprofile.setEvetListeners();
  profilevalidator.resetValidation();
});






