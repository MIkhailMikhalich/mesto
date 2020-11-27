let closebuttonNode = document.querySelector('.popup__close-button');
let editbuttonNode = document.querySelector('.profile__edit-button');
let popupNode = document.querySelector('.popup');
let popupFormNode = document.querySelector('.popup__form');
let profileNameNode = document.querySelector('.profile__name');
let profileInfoNode = document.querySelector('.profile__text');
let submitButtonNode = document.querySelector('.popup__save-button');
let nameInputNode = document.querySelector('.popup__name-input');
let infoInputNode = document.querySelector('.popup__info-input');



function togglePopupVisibility()
{
  popupNode.classList.toggle('popup_hidden');
}

function submit (event)
{
  event.preventDefault();

  profileNameNode.textContent = nameInputNode.value;
  profileInfoNode.textContent = infoInputNode.value;
}

function openpopup()
{
  nameInputNode.value=profileNameNode.textContent;
  infoInputNode.value=profileInfoNode.textContent;
}

editbuttonNode.addEventListener('click', togglePopupVisibility);
editbuttonNode.addEventListener('click', openpopup);
closebuttonNode.addEventListener('click', togglePopupVisibility);
submitButtonNode.addEventListener('click',submit);
submitButtonNode.addEventListener('click',togglePopupVisibility);
popupFormNode.addEventListener('submit', submit);
popupFormNode.addEventListener('submit', togglePopupVisibility);


