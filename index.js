const closebuttonNode = document.querySelector('.popup__close_button');
const editbuttonNode = document.querySelector('.profile__edit_button');
const popupNode = document.querySelector('.popup');
editbuttonNode.addEventListener('click', togglePopupVisibility);
closebuttonNode.addEventListener('click', togglePopupVisibility);

function togglePopupVisibility()
{
  popupNode.classList.toggle('popup__visible');
  popupNode.classList.toggle('popup__hidden')
}
