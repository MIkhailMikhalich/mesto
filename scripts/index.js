import initialCards from './InitialCards.js';
import Card from './Card.js';
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
export {enablePopupVisibility,popupPhotoNode,popupPhotoImg,popupPhotoName};

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
const overlay = document.querySelectorAll('.popup__overlay');
const photoTemplate = document.querySelector('#photocard');
const photocards = document.querySelector('.photocards');


const placevalidator = new FormValidator(placeForm,validationConfig);
placevalidator.enableValidate();
const profilevalidator = new FormValidator(profileForm,validationConfig);
profilevalidator.enableValidate();

function enablePopupVisibility(popup) {
  popup.classList.add('popup_visible');
  document.addEventListener('keydown', closeByESC);
}

function disablePopupVisibility(popup) {
  popup.classList.remove('popup_visible');
  document.removeEventListener('keydown', closeByESC);
}


function submitProfile() {
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
}



function addToGrid(card) {
  photocards.prepend(card);
}

function closeByESC(event) {
  const key = event.key;

  if (key === "Escape"){
    const popup = document.querySelector('.popup_visible');
    disablePopupVisibility(popup);
}
}



function getFilledCard() {
  const card = new Card(placeNameInput.value, srcInput.value, photoTemplate)
  return card.createCard();
}
addButtonNode.addEventListener('click', function (event) {
  event.preventDefault();
  enablePopupVisibility(popupPlaceNode);
  placeNameInput.value = "";
  srcInput.value = "";

});
placeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addToGrid(getFilledCard());
  disablePopupVisibility(popupPlaceNode)
});

initialCards.forEach(
  function (element) {
    const card = new Card(element.name, element.link, photoTemplate);
    const cardElament = card.createCard();
    addToGrid(cardElament);
  });

overlay.forEach(function (a) {
  a.addEventListener('click', function (currentTarget) {
    const currentpopup = currentTarget.currentTarget;
    disablePopupVisibility(currentpopup.parentElement)
  })
});

closePhotobuttonNode.addEventListener('click', function () {
  disablePopupVisibility(popupPhotoNode)
});
closePlacebuttonNode.addEventListener('click', function (event) {
  event.preventDefault();
  disablePopupVisibility(popupPlaceNode)
});

editbuttonNode.addEventListener('click', function (event) {
  event.preventDefault();
  openPopupProfile();
  enablePopupVisibility(popupNode)
});
closebuttonNode.addEventListener('click', function (event) {
  event.preventDefault();
  disablePopupVisibility(popupNode)
});
profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  submitProfile();
  disablePopupVisibility(popupNode)
});





