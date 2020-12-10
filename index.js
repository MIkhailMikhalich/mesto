
const closebuttonNode = document.querySelector('.popup__close-button');
const closePlacebuttonNode = document.querySelector('.popup__place-close-button');
const closePhotobuttonNode = document.querySelector('.popup__photo-close-button');
const editbuttonNode = document.querySelector('.profile__edit-button');
const popupNode = document.querySelector('#popup');
const popupPlaceNode = document.querySelector('#popup-place');
const popupPhotoNode = document.querySelector('#popup-photo');
const photo = document.querySelector('.popup__photo-img');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__text');
const submitButtonNode = document.querySelector('.popup__save-button');
const submitPlaceButtonNode = document.querySelector('.popup__place-save-button');
const addButtonNode = document.querySelector('.profile__add-button');
const popupPhotoImg = document.querySelector('.popup__photo-img');
const popupPhotoName =  document.querySelector('.popup__photo-name');
let nameInput = document.querySelector('.popup__name-input');
let placeNameInput = document.querySelector('.popup__place-name-input');
let infoInput = document.querySelector('.popup__info-input');
let srcInput = document.querySelector('.popup__src-input');


const photoTemplate = document.querySelector('#photocard');
const photocards = document.querySelector('.photocards');
const namelikearea = document.querySelector('.photocards__name-like-area');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
initialCards.forEach(
  function (element) {
    let cardname = element.name;
    let src = element.link;
    addToGrid(addPhotoCard(cardname, src));
  });
function submitPhotoCard() {
  let name = placeNameInput.value;
  let src = srcInput.value;
  return addPhotoCard(name, src);
}
function addPhotoCard(name, link) {
  const photoElement = photoTemplate.content.cloneNode(true);
  let likeButtonNode = photoElement.querySelector('.photocards__like-button');
  let photoButtonNode = photoElement.querySelector('.photocards__photo-button');
  let deleteButtonNode = photoElement.querySelector('.photocards__delete-button');

  photoElement.querySelector('.photocards__place-name').textContent = name;
  photoElement.querySelector('.photocards__photo').src = link;
  photoElement.querySelector('.photocards__photo').alt = `Фото ${name}`;
  deleteButtonNode.addEventListener('click',function () { removeElement(deleteButtonNode) });
  photoButtonNode.addEventListener('click', function () { addPhotoSrc(link, name); togglePopupPhotoVisibility()});
  likeButtonNode.addEventListener('click', function (a) { onLikeButtonNode(a.currentTarget) });
  return photoElement;

}
function togglePopupVisibility(popupname) {
  document.querySelector(`${popupname}`).classList.toggle('popup_hidden');
}

function addPhotoSrc(link, name) {
  popupPhotoImg.setAttribute('src', `${link}`)
  popupPhotoName.textContent = name;
}
function togglePopupPhotoVisibility() {
  popupPhotoNode.classList.toggle('popup_hidden');
}
function submitProfile() {
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
}

function openPopup() {
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
}
function onLikeButtonNode(like) {
  like.classList.toggle('photocards__likeimg-fill')
}
function removeElement(a)
{
  let closestparent = a.parentElement;
  closestparent.remove();
}
function addToGrid(a)
{
  photocards.prepend(a);
}

closePhotobuttonNode.addEventListener('click', function () {togglePopupPhotoVisibility()});
submitPlaceButtonNode.addEventListener('click', function (event) {event.preventDefault(); addToGrid(submitPhotoCard()); togglePopupVisibility('#popup-place')});
closePlacebuttonNode.addEventListener('click', function (event) {event.preventDefault(); togglePopupVisibility('#popup-place')});
addButtonNode.addEventListener('click', function (event) {event.preventDefault(); togglePopupVisibility('#popup-place')});
editbuttonNode.addEventListener('click', function (event) {event.preventDefault(); openPopup(); togglePopupVisibility("#popup")});
closebuttonNode.addEventListener('click', function (event) {event.preventDefault(); togglePopupVisibility("#popup")});
submitButtonNode.addEventListener('click', function (event) {event.preventDefault(); submitProfile(); togglePopupVisibility("#popup")});
popupForm.addEventListener('submit', function (event) {event.preventDefault(); submitProfile(); togglePopupVisibility("#popup")});




