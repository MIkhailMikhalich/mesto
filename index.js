let closebuttonNode = document.querySelector('.popup__close-button');
let editbuttonNode = document.querySelector('.profile__edit-button');
let popupNode = document.querySelector('.popup');
let popupFormNode = document.querySelector('.popup__form');
let profileNameNode = document.querySelector('.profile__name');
let profileInfoNode = document.querySelector('.profile__text');
let submitButtonNode = document.querySelector('.popup__save-button');
let formInputNameNode;
document.querySelector('.popup__name-input').value=profileNameNode.textContent;
document.querySelector('.popup__info-input').value=profileInfoNode.textContent;


function togglePopupVisibility()
{
  popupNode.classList.toggle('popup_hidden');
}

function submit (event)
{
  event.preventDefault();
  formInputNameNode = document.querySelector('.popup__name-input');
  formInputInfoNode = document.querySelector('.popup__info-input');
  profileNameNode.textContent = formInputNameNode.value;
  profileInfoNode.textContent = formInputInfoNode.value;
}

editbuttonNode.addEventListener('click', togglePopupVisibility);
closebuttonNode.addEventListener('click', togglePopupVisibility);
submitButtonNode.addEventListener('click',submit);
submitButtonNode.addEventListener('click',togglePopupVisibility);
popupFormNode.addEventListener('submit', submit);
popupFormNode.addEventListener('submit', togglePopupVisibility);


