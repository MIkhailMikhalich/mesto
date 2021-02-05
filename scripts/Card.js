
class Card {
  constructor(name, img, template, popupphoto) {
    this._name = name;
    this._img = img;
    this._template = template;
    this._popupPhoto=popupphoto;
    this._handleCardClick = popupphoto.open;
  }

  _onLikeButtonNode(like) {
    like.classList.toggle('photocards__likeimg-fill')
  }
  _getTemplate() {
    const cardElement = this._template.content.querySelector('.photocards__item').cloneNode(true);

    return cardElement;
  }

  _removeElement(element) {

    element.remove();
  }

  createCard() {

    this._element = this._getTemplate();
    const likeButtonNode = this._element.querySelector('.photocards__like-button');
    const photoButtonNode = this._element.querySelector('.photocards__photo-button');
    const deleteButtonNode = this._element.querySelector('.photocards__delete-button');
    const placename = this._element.querySelector('.photocards__place-name');
    const photo = this._element.querySelector('.photocards__photo');

    placename.textContent = this._name;
    photo.src = this._img;
    photo.alt = `Фото ${this._name}`;
    deleteButtonNode.addEventListener('click', () => { this._removeElement(this._element) });
    photoButtonNode.addEventListener('click', () => { this._handleCardClick(this._img, this._name),this._popupPhoto.setEventListeners() });
    likeButtonNode.addEventListener('click', (a) => { this._onLikeButtonNode(a.currentTarget) });
    return this._element;

  }

}
export default Card;
