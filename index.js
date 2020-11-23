const ClosebuttonNode = document.querySelector('.popup__close-button');
const EditbuttonNode = document.querySelector('.profile__edit-button');
const PopupNode = document.querySelector('.popup');

EditbuttonNode.addEventListener('click', togglePopupVisibility);
ClosebuttonNode.addEventListener('click', togglePopupVisibility);


function togglePopupVisibility()
{
  PopupNode.classList.toggle('popup_visible');
  PopupNode.classList.toggle('popup_hidden');
}



const PopupFormNode = document.querySelector('.popup__form');
const ProfileNameNode = document.querySelector('.profile__name');
const ProfileInfoNode = document.querySelector('.profile__text');
const SubmitButtonNode = document.querySelector('.popup__save-button');


SubmitButtonNode.addEventListener('click',Submit);
PopupFormNode.addEventListener('submit', Submit);


function Submit (event)
{
  event.preventDefault();
  const FormInputNameNode = document.querySelector('.popup__name-input');
  const FormInputInfoNode = document.querySelector('.popup__info-input');
  ProfileNameNode.textContent = FormInputNameNode.value;
  ProfileInfoNode.textContent = FormInputInfoNode.value;
  document.querySelector('.popup__name-input').setAttribute('placeholder',FormInputNameNode.value);
  document.querySelector('.popup__info-input').setAttribute('placeholder',FormInputInfoNode.value);
}
