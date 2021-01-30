import initialCards from './InitialCards.js';
import Card from './Card.js';
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import { Popup, PopupWithImage, PopupWithForm } from './Popup.js';
export { popupPhotoImg, popupPhotoName, popupphoto,getFilledCard, profileName, profileInfo, addToGrid };

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


const placevalidator = new FormValidator(placeForm, validationConfig);
placevalidator.enableValidate();
const profilevalidator = new FormValidator(profileForm, validationConfig);
profilevalidator.enableValidate();
const popupprofile = new PopupWithForm(popupNode);
const popupplace = new PopupWithForm(popupPlaceNode);
const popupphoto = new PopupWithImage(popupPhotoNode, popupPhotoImg, popupPhotoName);

function addToGrid(card) {
  photocards.prepend(card);
}

function getFilledCard(name, link) {
  const card = new Card(name, link, photoTemplate)
  return card.createCard();
}
addButtonNode.addEventListener('click', (event) => {
  event.preventDefault();

  popupplace.open();
  popupplace.setEvetListeners();
  placeNameInput.value = "";
  srcInput.value = "";
  placevalidator.resetValidation();

});

initialCards.forEach(
  function (element) {
    addToGrid(
      getFilledCard(element.name, element.link));
  });






editbuttonNode.addEventListener('click', (event) => {
  event.preventDefault();

  popupprofile.openPopupProfile();
  popupprofile.open();
  popupprofile.setEvetListeners();
  profilevalidator.resetValidation();
});






