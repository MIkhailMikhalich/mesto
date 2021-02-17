
class Card {
  constructor(data, userid, handleLikeClick, handleCardClick, handleDeleteClick ,template, api) {
    this._name = data.name;
    this._img = data.link;
    this._id = data._id;
    this._likes;
    this._likers = data.likes;
    this._owner;
    this._user = userid
    this._template = template;
    this._api = api;
    this._handleLikeClick = handleLikeClick;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;

    if (data.owner == undefined) {
      this._owner = userid;
    }
    else {
      this._owner = data.owner._id;
    };
    if (data.likes == undefined) {
      this._likes = 0;
    }
    else {
      this._likes = data.likes.length;
    };
  }
  _updateLikes(node)
  {
    node.textContent=this._likes;
  }


  _getTemplate() {
    const cardElement = this._template.content.querySelector('.photocards__item').cloneNode(true);

    return cardElement;
  }

  createCard() {

    this._element = this._getTemplate();
    const likeButtonNode = this._element.querySelector('.photocards__like-button');
    const photoButtonNode = this._element.querySelector('.photocards__photo-button');
    const deleteButtonNode = this._element.querySelector('.photocards__delete-button');
    const placename = this._element.querySelector('.photocards__place-name');
    const photo = this._element.querySelector('.photocards__photo');
    const likes = this._element.querySelector('.photocards__likes');

    likes.textContent = this._likes;
    placename.textContent = this._name;
    photo.src = this._img;
    photo.alt = `Фото ${this._name}`;
    this._likers.forEach(element => {
      if (element._id == this._user) {
        likeButtonNode.classList.toggle('photocards__likeimg-fill');
      }
    });

    if (this._user == this._owner) {
      deleteButtonNode.classList.add("photocards__delete-button__visible");
      deleteButtonNode.addEventListener('click', (button)=>{this._handleDeleteClick(this._id,button.currentTarget)});

    }
    else {
      deleteButtonNode.setAttribute('disabled', true);
    }
    photoButtonNode.addEventListener('click', () => { this._handleCardClick(this._img, this._name)});
    likeButtonNode.addEventListener('click', (a) => { this._handleLikeClick(a.currentTarget,likes);});

    return this._element;

  }

}
export default Card;
