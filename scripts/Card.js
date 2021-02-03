
class Card {
  constructor(name, img, template, popupphoto) {
    this._Name = name;
    this._Img = img;
    this._Template = template;
    this._PopupPhoto=popupphoto;
    this._HandleCardClick = popupphoto.open;
  }

  _onLikeButtonNode(like) {
    like.classList.toggle('photocards__likeimg-fill')
  }
  _getTemplate() {
    const cardElement = this._Template.content.querySelector('.photocards__item').cloneNode(true);

    return cardElement;
  }

  _removeElement(element) {

    element.remove();
  }

  createCard() {

    this._Element = this._getTemplate();
    const likeButtonNode = this._Element.querySelector('.photocards__like-button');
    const photoButtonNode = this._Element.querySelector('.photocards__photo-button');
    const deleteButtonNode = this._Element.querySelector('.photocards__delete-button');
    const placename = this._Element.querySelector('.photocards__place-name');
    const photo = this._Element.querySelector('.photocards__photo');

    placename.textContent = this._Name;
    photo.src = this._Img;
    photo.alt = `Фото ${this._Name}`;
    deleteButtonNode.addEventListener('click', () => { this._removeElement(this._Element) });
    photoButtonNode.addEventListener('click', () => { this._HandleCardClick(this._Img, this._Name),this._PopupPhoto.setEvetListeners() });
    likeButtonNode.addEventListener('click', (a) => { this._onLikeButtonNode(a.currentTarget) });
    return this._Element;

  }

}
export default Card;
