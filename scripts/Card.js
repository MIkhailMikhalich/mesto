
class Card {
  constructor(data, userid, template, popupphoto, deletepopup, api) {


    this._name = data.name;
    this._img = data.link;
    this._id = data._id;
    this._likes;
    this._likers = data.likes;
    this._owner;
    this._user = userid
    this._template = template;
    this._popupPhoto = popupphoto;
    this._handleCardClick = popupphoto.open;
    this._question = deletepopup;
    this._api = api;
    this._onLikeButtonNode = this._onLikeButtonNode.bind(this);
    this._agree = this._agree.bind(this);
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
  _onLikeButtonNode(like,node) {

    if (like.classList.contains('photocards__likeimg-fill'))
    {
      this._api.unPutLike(this._id)
      .then((data)=>{this._likes=data.likes.length;this._updateLikes(node);})
      .catch((err)=>{console.log(err)});
      like.classList.toggle('photocards__likeimg-fill')
    }
    else
    {

      this._api.putLike(this._id)
      .then((data)=>{ this._likes=data.likes.length;this._updateLikes(node);})
      .catch((err)=>{console.log(err)});
      like.classList.toggle('photocards__likeimg-fill')
    }

  }
  _getTemplate() {
    const cardElement = this._template.content.querySelector('.photocards__item').cloneNode(true);

    return cardElement;
  }
  _agree() {
    const agreeButton = this._question._popup.querySelector('#agree');
    this._question.open(),
      this._question.setEventListeners();
    agreeButton.addEventListener('click', () => { this._removeElement(this._element); agreeButton.textContent="Да..." })

  }
  _removeElement(element) {

    this._api.deleteCard(this._id)
      .then(() => {
        element.remove();
        this._question._popup.querySelector('#agree').textContent="Да"
        this._question.close();
      }
      )
      .catch((err) => { console.log(err) });
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
      deleteButtonNode.addEventListener('click', this._agree);

    }
    else {
      deleteButtonNode.setAttribute('disabled', true);
    }
    photoButtonNode.addEventListener('click', () => { this._handleCardClick(this._img, this._name), this._popupPhoto.setEventListeners() });
    likeButtonNode.addEventListener('click', (a) => { this._onLikeButtonNode(a.currentTarget,likes);});

    return this._element;

  }

}
export default Card;
