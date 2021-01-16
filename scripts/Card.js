const placeForm = document.querySelector('#place-form');
const addButtonNode = document.querySelector('.profile__add-button');

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

class Card {
  constructor(name, img, template) {
    this._name = name;
    this._img = img;
    this._template = template;
  }

  _onLikeButtonNode(like) {
    like.classList.toggle('photocards__likeimg-fill')
  }

  _removeElement(element) {

    const closestparent = element.parentElement;
    closestparent.remove();
  }

  createCard() {

    const photoElement = this._template.content.cloneNode(true);
    const likeButtonNode = photoElement.querySelector('.photocards__like-button');
    const photoButtonNode = photoElement.querySelector('.photocards__photo-button');
    const deleteButtonNode = photoElement.querySelector('.photocards__delete-button');
    const placename = photoElement.querySelector('.photocards__place-name');
    const photo = photoElement.querySelector('.photocards__photo');

    placename.textContent = this._name;
    photo.src = this._img;
    photo.alt = `Фото ${this._name}`;
    deleteButtonNode.addEventListener('click', () => { this._removeElement(deleteButtonNode) });
    photoButtonNode.addEventListener('click', () => { this._addPhotoSrc(this._img, this._name); enablePopupVisibility(popupPhotoNode) });
    likeButtonNode.addEventListener('click', (a) => { this._onLikeButtonNode(a.currentTarget) });
    return photoElement;

  }

  _addPhotoSrc() {
    popupPhotoImg.setAttribute('src', `${this._img}`)
    popupPhotoImg.setAttribute('alt', `Фото ${this._name}`)
    popupPhotoName.textContent = this._name;

  }



}
initialCards.forEach(
  function (element) {
    const card = new Card(element.name, element.link, photoTemplate);
    const cardElament = card.createCard();
    addToGrid(cardElament);
  });
function getFilledCard() {
  const card = new Card(placeNameInput.value, srcInput.value, photoTemplate)
  return card.createCard();
}
addButtonNode.addEventListener('click', function (event) {
  event.preventDefault();
  enablePopupVisibility(popupPlaceNode);
  placeNameInput.value = "";
  srcInput.value = "";
  setButtonState(placeForm.querySelector(validationConfig.submitButtonSelector), placeForm.checkValidity(), validationConfig);
});
placeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addToGrid(getFilledCard());
  disablePopupVisibility(popupPlaceNode)
});
