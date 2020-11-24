let closebuttonNode = document.querySelector('.popup__close-button');
let editbuttonNode = document.querySelector('.profile__edit-button');
let popupNode = document.querySelector('.popup');
let popupFormNode = document.querySelector('.popup__form');
let profileNameNode = document.querySelector('.profile__name');
let profileInfoNode = document.querySelector('.profile__text');
let submitButtonNode = document.querySelector('.popup__save-button');
editbuttonNode.addEventListener('click', togglePopupVisibility);
closebuttonNode.addEventListener('click', togglePopupVisibility);


function togglePopupVisibility()
{
  popupNode.classList.toggle('popup_hidden');
}






submitButtonNode.addEventListener('click',Submit);
popupFormNode.addEventListener('submit', Submit);


function Submit (event)
{
  event.preventDefault();
  const formInputNameNode = document.querySelector('.popup__name-input');
  const formInputInfoNode = document.querySelector('.popup__info-input');
  profileNameNode.textContent = formInputNameNode.value;
  profileInfoNode.textContent = formInputInfoNode.value;
  document.querySelector('.popup__name-input').setAttribute('placeholder',formInputNameNode.value);
  document.querySelector('.popup__info-input').setAttribute('placeholder',formInputInfoNode.value);
}
