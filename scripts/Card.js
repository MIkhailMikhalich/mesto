import {popupphoto,popupPhotoName,popupPhotoImg} from './index.js';

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
    photoButtonNode.addEventListener('click', () => {popupphoto.open(this._img, this._name),popupphoto.setEvetListeners() });
    likeButtonNode.addEventListener('click', (a) => { this._onLikeButtonNode(a.currentTarget) });
    return photoElement;

  }

}
export default Card;
