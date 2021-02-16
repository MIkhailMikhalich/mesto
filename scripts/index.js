import '../pages/index.css';
import Card from './Card.js';
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
import { UserInfo } from './UserInfo.js';
import { Section } from './Section.js';
import {API} from './API.js';
import { Popup } from './Popup';
const profileAvatar = document.querySelector('.profile__avatar');
const profileAvatarEditButton = document.querySelector('.button__change-avatar');
const popupChangeAvatar = document.querySelector('#popup-changeavatar');
const popupChangeAvatarForm = document.querySelector('#avatar-form');
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
const deletePopup = document.querySelector('#popup-erase')
const api = new API({
  url: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
    authorization: '791affea-f9d6-450e-956e-cb248107940a',
    'Content-Type': 'application/json'
  }
});

const profileData = api.getProfile();
const initialCards = api.getInitialCards();
const section = new Section(photoCards);
const popupPhoto = new PopupWithImage(popupPhotoNode, popupPhotoImg, popupPhotoName);
const profile = new UserInfo(profileName, profileInfo);
const popupProfile = new PopupWithForm(popupProfileNode,handleProfileFormSubmit);
const popupPlace = new PopupWithForm(popupPlaceNode,handlePlaceFormSubmit);
const popupEditAvatar = new PopupWithForm(popupChangeAvatar,handleChangeAvatarSubmit)
const popupEditAvatarValidator = new FormValidator(popupChangeAvatarForm,validationConfig);
const placeValidator = new FormValidator(placeForm, validationConfig);
const profileValidator = new FormValidator(profileForm, validationConfig);
const erasePopup = new Popup (deletePopup);
let userId;

initialCards.then((data)=>
{

  data.forEach(
    function (element) {
      section.addItem(getFilledCard(element));
    });
})
.catch((err)=>{console.log(err)});

profileData.then((data)=>{
submitProfile(data.name,data.about);
profileAvatar.setAttribute('src',data.avatar);
userId = data._id;
})
.catch((err)=>{console.log(err)});

placeValidator.enableValidate();
profileValidator.enableValidate();
popupEditAvatarValidator.enableValidate();

function getFilledCard(data) {

  const card = new Card(data, userId, photoTemplate, popupPhoto,erasePopup,api)
  return card.createCard();
}

function openPopupProfile() {
  const information = profile.getUserInfo()
  nameInput.value = information.name.textContent;
  infoInput.value = information.info.textContent;
}

function submitProfile(name, info) {
  api.setProfileData(name, info)
  .then((data)=>{
    profileName.textContent=data.name;
    profileInfo.textContent=data.about;
    popupProfile._popup.querySelector(".popup__save-button").textContent="Сохранить";
    popupProfile.close()})
  .catch((err)=>{console.log(err)});


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

    submitProfile(properties.inputList[0].value, properties.inputList[1].value);

}

function handlePlaceFormSubmit(properties)
{


  const data = {name: properties.inputList[0].value, link: properties.inputList[1].value};
  api.postCard(data)
  .then((data)=>{section.addMyItem(getFilledCard(data));
    popupPlace._popup.querySelector(".popup__save-button").textContent="Сохранить";
    popupPlace.close();
    })
  .catch((err)=>{console.log(err)});

}

function handleChangeAvatarSubmit(properties)
{

  api.setProfileAvatar(properties.inputList[0].value)
  .then((data)=>{profileAvatar.setAttribute('src',data.avatar);
  popupEditAvatar._popup.querySelector(".popup__save-button").textContent="Сохранить";
  popupEditAvatar.close();
})
  .catch((err)=>{console.log(err)});
}


profileAvatarEditButton.addEventListener('click', (event) => {
  event.preventDefault();

  openPopupProfile();
  popupEditAvatar.open();
  popupEditAvatar.setEventListeners();
  popupEditAvatarValidator.resetValidation();
});
editButtonNode.addEventListener('click', (event) => {
  event.preventDefault();

  openPopupProfile();
  popupProfile.open();
  popupProfile.setEventListeners();
  profileValidator.resetValidation();
});







