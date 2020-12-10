
const closebuttonNode = document.querySelector('.popup__close-button');
const closePlacebuttonNode = document.querySelector('.popup__place-close-button');
const closePhotobuttonNode = document.querySelector('.popup__photo-close-button');
const editbuttonNode = document.querySelector('.profile__edit-button');
const popupNode = document.querySelector('#popup');
const popupPlaceNode = document.querySelector('#popup-place');
const popupPhotoNode = document.querySelector('#popup-photo');
const photo = document.querySelector('.popup__photo-img');
const profileForm = document.querySelector('#profile-form');
const placeForm = document.querySelector('#place-form');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__text');
const submitButtonNode = document.querySelector('.popup__save-button');
const submitPlaceButtonNode = document.querySelector('.popup__place-save-button');
const addButtonNode = document.querySelector('.profile__add-button');
const popupPhotoImg = document.querySelector('.popup__photo-img');
const popupPhotoName =  document.querySelector('.popup__photo-name');
const nameInput = document.querySelector('.popup__name-input');
const placeNameInput = document.querySelector('.popup__place-name-input');
const infoInput = document.querySelector('.popup__info-input');
const srcInput = document.querySelector('.popup__src-input');


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
    const cardname = element.name;
    const src = element.link;
    addToGrid(addPhotoCard(cardname, src));
  });
function submitPhotoCard() {
  const name = placeNameInput.value;
  const src = srcInput.value;
  return addPhotoCard(name, src);
}
function addPhotoCard(name, link) {
  const photoElement = photoTemplate.content.cloneNode(true);
  const likeButtonNode = photoElement.querySelector('.photocards__like-button');
  const photoButtonNode = photoElement.querySelector('.photocards__photo-button');
  const deleteButtonNode = photoElement.querySelector('.photocards__delete-button');
  const placename = photoElement.querySelector('.photocards__place-name');
  const photo = photoElement.querySelector('.photocards__photo');

  placename.textContent = name;
  photo.src = link;
  photo.alt = `Фото ${name}`;
  deleteButtonNode.addEventListener('click',function () { removeElement(deleteButtonNode) });
  photoButtonNode.addEventListener('click', function () { addPhotoSrc(link, name); togglePopupVisibility(popupPhotoNode)});
  likeButtonNode.addEventListener('click', function (a) { onLikeButtonNode(a.currentTarget) });
  return photoElement;

}
function togglePopupVisibility(popup) {
  popup.classList.toggle('popup_hidden');
}

function addPhotoSrc(link, name) {
  popupPhotoImg.setAttribute('src', `${link}`)
  popupPhotoImg.setAttribute('alt',`Фото ${name}`)
  popupPhotoName.textContent = name;

}

function submitProfile() {
  profileName.textContent = nameInput.value;
  profileInfo.textContent = infoInput.value;
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
}
function onLikeButtonNode(like) {
  like.classList.toggle('photocards__likeimg-fill')
}
function removeElement(a)
{
  const closestparent = a.parentElement;
  closestparent.remove();
}
function addToGrid(a)
{
  photocards.prepend(a);
}

closePhotobuttonNode.addEventListener('click', function () {togglePopupVisibility(popupPhotoNode)});
closePlacebuttonNode.addEventListener('click', function (event) {event.preventDefault(); togglePopupVisibility(popupPlaceNode)});
addButtonNode.addEventListener('click', function (event) {event.preventDefault(); togglePopupVisibility(popupPlaceNode)});
editbuttonNode.addEventListener('click', function (event) {event.preventDefault(); openPopupProfile(); togglePopupVisibility(popupNode)});
closebuttonNode.addEventListener('click', function (event) {event.preventDefault(); togglePopupVisibility(popupNode)});
profileForm.addEventListener('submit', function (event) {event.preventDefault(); submitProfile(); togglePopupVisibility(popupNode)});
placeForm.addEventListener('submit', function (event) {event.preventDefault(); addToGrid(submitPhotoCard()); togglePopupVisibility(popupPlaceNode)});




