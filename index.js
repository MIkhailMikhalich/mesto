
let closebuttonNode = document.querySelector('.popup__close-button');
let closePlacebuttonNode = document.querySelector('.popup__place-close-button');
let closePhotobuttonNode = document.querySelector('.popup__photo-close-button');
let editbuttonNode = document.querySelector('.profile__edit-button');
let popupNode = document.querySelector('#popup');
let popupPlaceNode = document.querySelector('#popup-place');
let popupPhotoNode = document.querySelector('#popup-photo');
let photoNode = document.querySelector('.popup__photo-img');
let popupFormNode = document.querySelector('.popup__form');
let profileNameNode = document.querySelector('.profile__name');
let profileInfoNode = document.querySelector('.profile__text');
let submitButtonNode = document.querySelector('.popup__save-button');
let submitPlaceButtonNode = document.querySelector('.popup__place-save-button');
let nameInputNode = document.querySelector('.popup__name-input');
let placeNameInputNode = document.querySelector('.popup__place-name-input');
let infoInputNode = document.querySelector('.popup__info-input');
let srcInputNode = document.querySelector('.popup__src-input');
let addButtonNode = document.querySelector('.profile__add-button');

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
    let funcname = element.name;
    let src = element.link;
    photoCardAdd(funcname, src);
  });
function photoCardSubmit(event) {
  event.preventDefault();
  let name = placeNameInputNode.value;
  let src = srcInputNode.value;
  photoCardAdd(name, src);
}
function photoCardAdd(name, link) {
  const photoElement = photoTemplate.content.cloneNode(true);
  let likeButtonNode = photoElement.querySelector('.photocards__like-button');
  let photoButtonNode = photoElement.querySelector('.photocards__photo-button');
  let deleteButtonNode = photoElement.querySelector('.photocards__delete-button');

  photoElement.querySelector('.photocards__place-name').textContent = name;
  photoElement.querySelector('.photocards__photo').src = link;
  deleteButtonNode.addEventListener('click', function () {
    let card = deleteButtonNode.closest('.photocards__item')
    card.remove()
  });
  photoButtonNode.addEventListener('click', function () { togglePhotoVisibility(link, name) });
  closePhotobuttonNode.addEventListener('click', togglePopupPhotoVisibility);
  likeButtonNode.addEventListener('click', function (a) { onLikeButtonNode(a.currentTarget) });
  photocards.prepend(photoElement);
}
function togglePopupVisibility() {
  popupNode.classList.toggle('popup_hidden');
}
function togglePopupPlaceVisibility() {
  popupPlaceNode.classList.toggle('popup_hidden');
}
function togglePhotoVisibility(link, name) {
  popupPhotoNode.classList.toggle('popup_hidden');
  document.querySelector('.popup__photo-img').setAttribute('src', `${link}`)
  document.querySelector('.popup__photo-name').textContent = name;
}
function togglePopupPhotoVisibility() {
  popupPhotoNode.classList.toggle('popup_hidden');
}
function submit(event) {
  event.preventDefault();

  profileNameNode.textContent = nameInputNode.value;
  profileInfoNode.textContent = infoInputNode.value;
}

function openpopup() {
  nameInputNode.value = profileNameNode.textContent;
  infoInputNode.value = profileInfoNode.textContent;
}
function onLikeButtonNode(like) {
  like.classList.toggle('photocards__likeimg-fill')
}


submitPlaceButtonNode.addEventListener('click', photoCardSubmit);
submitPlaceButtonNode.addEventListener('click', togglePopupPlaceVisibility);
closePlacebuttonNode.addEventListener('click', togglePopupPlaceVisibility);
closePhotobuttonNode.addEventListener('click', togglePopupPhotoVisibility);
addButtonNode.addEventListener('click', togglePopupPlaceVisibility);
editbuttonNode.addEventListener('click', togglePopupVisibility);
editbuttonNode.addEventListener('click', openpopup);
closebuttonNode.addEventListener('click', togglePopupVisibility);
submitButtonNode.addEventListener('click', submit);
submitButtonNode.addEventListener('click', togglePopupVisibility);
popupFormNode.addEventListener('submit', submit);
popupFormNode.addEventListener('submit', togglePopupVisibility);




