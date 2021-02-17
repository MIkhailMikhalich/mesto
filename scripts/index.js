import '../pages/index.css';
import Card from './components/Card.js';
import validationConfig from './components/validationConfig.js';
import FormValidator from './components/FormValidator.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { UserInfo } from './components/UserInfo.js';
import { Section } from './components/Section.js';
import {API} from './components/API.js';
import { Popup } from './components/Popup';
import {PopupWithSubmit} from'./components/PopupWithSubmit.js';

const profileAvatar = document.querySelector('.profile__avatar');
const profileAvatarEditButton = document.querySelector('.button_change-avatar');
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
const profile = new UserInfo(profileName, profileInfo,profileAvatar);
const popupProfile = new PopupWithForm(popupProfileNode,handleProfileFormSubmit);
const popupPlace = new PopupWithForm(popupPlaceNode,handlePlaceFormSubmit);
const popupEditAvatar = new PopupWithForm(popupChangeAvatar,handleChangeAvatarSubmit);
const popupEditAvatarValidator = new FormValidator(popupChangeAvatarForm,validationConfig);
const placeValidator = new FormValidator(placeForm, validationConfig);
const profileValidator = new FormValidator(profileForm, validationConfig);
const erasePopup = new PopupWithSubmit (deletePopup,acceptedRequest);
let isAccepted = false;
let userId;

popupEditAvatar.setEventListeners();
popupPlace.setEventListeners();
popupProfile.setEventListeners();
popupPhoto.setEventListeners()
erasePopup.setEventListeners();

initialCards.then((data)=>
{

  data.forEach(
    function (element) {
      section.addItem(getFilledCard(element));
    });
})
.catch((err)=>{console.log(err)});

profileData.then((data)=>{
submitProfile(data);
userId = data._id;
})
.catch((err)=>{console.log(err)});

placeValidator.enableValidate();
profileValidator.enableValidate();
popupEditAvatarValidator.enableValidate();

function getFilledCard(data) {

  const card = new Card(data, userId, onLikeButtonNode, handleCardClick, handleDeleteClick ,photoTemplate,api)
  return card.createCard();
}



function onLikeButtonNode(like,node,card) {

  if (like.classList.contains('photocards__likeimg-fill'))
  {
    card.unLikeCard(node);
    like.classList.toggle('photocards__likeimg-fill')
  }
  else
  {
    card.likeCard(node);
    like.classList.toggle('photocards__likeimg-fill')
  }

};

function openPopupProfile() {
  const information = profile.getUserInfo()
  nameInput.value = information.name.textContent;
  infoInput.value = information.info.textContent;
}

function submitProfile(data) {
  api.setProfileData(data.name, data.about)
  .then((data)=>{
    profile.setUserInfo(data);
    popupProfile.submitButton.textContent="Сохранить";
    popupProfile.close()})
  .catch((err)=>{console.log(err)});


};

function acceptedRequest(id,currentTarget)
{

  isAccepted = true;
  deleteElement(id,currentTarget);
};

function deleteElement(id,currentTarget)
{
  if (isAccepted)
  {
    api.deleteCard(id)
      .then(() => {
        currentTarget.parentElement.remove();
        erasePopup.submitButton.textContent="Да";
        isAccepted=false;
        erasePopup.close();
      }
      )
      .catch((err) => { console.log(err) });
  }
}

function handleDeleteClick(id,currentTarget)
{
  erasePopup.open(id,currentTarget);

}


function handleCardClick(img,name)
{
  popupPhoto.open(img,name);
};

function handleProfileFormSubmit(properties)
{
  debugger
  const data = {name: properties.first, about: properties.second};
    submitProfile(data);

};

function handlePlaceFormSubmit(properties)
{


  const data = {name: properties.first, link: properties.second};
  api.postCard(data)
  .then((data)=>{section.addMyItem(getFilledCard(data));
    popupPlace.submitButton.textContent="Сохранить";
    popupPlace.close();
    })
  .catch((err)=>{console.log(err)});

};

function handleChangeAvatarSubmit(properties)
{

  api.setProfileAvatar(properties.second)
  .then((data)=>{profile.setUserInfo(data);
  popupEditAvatar.submitButton.textContent="Сохранить";
  popupEditAvatar.close();
})
  .catch((err)=>{console.log(err)});
};



profileAvatarEditButton.addEventListener('click', (event) => {
  event.preventDefault();

  openPopupProfile();
  popupEditAvatar.open();

 popupEditAvatarValidator.resetValidation();
});
editButtonNode.addEventListener('click', (event) => {
  event.preventDefault();

  openPopupProfile();
  popupProfile.open();
  profileValidator.resetValidation();
});

addButtonNode.addEventListener('click', (event) => {
  event.preventDefault();

  popupPlace.open();
  placeValidator.resetValidation();

});





