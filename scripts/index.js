import '../pages/index.css';
import initialCards from './InitialCards.js';
import Card from './Card.js';
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
import { UserInfo } from './UserInfo.js';
import { Section } from './Section.js';

const placeForm = document.querySelector('#place-form');
const addButtonNode = document.querySelector('.profile__add-button');
const editButtonNode = document.querySelector('.profile__edit-button');
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
const photoCards = document.querySelector('.photocards');

const section = new Section(initialCards, photoCards);
const placeValidator = new FormValidator(placeForm, validationConfig);
const profileValidator = new FormValidator(profileForm, validationConfig);

const popupPhoto = new PopupWithImage(popupPhotoNode, popupPhotoImg, popupPhotoName);
const profile = new UserInfo(profileName, profileInfo);
const popupProfile = new PopupWithForm(popupProfileNode,handleProfileFormSubmit);
const popupPlace = new PopupWithForm(popupPlaceNode,handlePlaceFormSubmit);



placeValidator.enableValidate();
profileValidator.enableValidate();

function getFilledCard(name, link) {
  const card = new Card(name, link, photoTemplate, popupPhoto)
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

  popupPlace.open();
  placeNameInput.value = "";
  srcInput.value = "";
  placeValidator.resetValidation();
  popupPlace.setEventListeners();

});

function handleProfileFormSubmit(properties)
{

    submitProfile(properties.first, properties.second);

}

function handlePlaceFormSubmit(properties)
{
  section.addItem(getFilledCard(properties.first, properties.second));
}

initialCards.forEach(
  function (element) {
    section.addItem(getFilledCard(element.name, element.link));
  });



editButtonNode.addEventListener('click', (event) => {
  event.preventDefault();

  openPopupProfile();
  popupProfile.open();
  popupProfile.setEventListeners();
  profileValidator.resetValidation();
});







