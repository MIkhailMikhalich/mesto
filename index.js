const ClosebuttonNode = document.querySelector('.popup__close_button');
const EditbuttonNode = document.querySelector('.profile__edit_button');
const PopupNode = document.querySelector('.popup');

EditbuttonNode.addEventListener('click', togglePopupVisibility);
ClosebuttonNode.addEventListener('click', togglePopupVisibility);


function togglePopupVisibility()
{
  PopupNode.classList.toggle('popup__visible');
  PopupNode.classList.toggle('popup__hidden');
}



const ProfileNameFormNode = document.querySelector('.popup__name_form')
const ProfileInfoFormNode = document.querySelector('.popup__info_form')
const ProfileNameNode = document.querySelector('.profile__name');
const ProfileInfoNode = document.querySelector('.profile__text');
const SubmitButtonNode = document.querySelector('.popup__save_button');

SubmitButtonNode.addEventListener('click',ButtonSummit);


ProfileNameFormNode.addEventListener('submit', NameSubmit);
ProfileInfoFormNode.addEventListener('submit', InfoSubmit);

function NameSubmit(event)
{

  event.preventDefault();
  const formInputNode = event.currentTarget.querySelector('.popup__name_input');
  ProfileNameNode.textContent = formInputNode.value;
  document.querySelector('.popup__name_input').setAttribute('placeholder',FormInputNameNode.value);

}
function InfoSubmit(event)
{
  event.preventDefault();
  const formInputNode = event.currentTarget.querySelector('.popup__info_input');
  ProfileInfoNode.textContent = formInputNode.value;
  document.querySelector('.popup__info_input').setAttribute('placeholder',FormInputInfoNode.value);
}

function ButtonSummit (event)
{
  event.preventDefault();
  const FormInputNameNode = document.querySelector('.popup__name_input');
  const FormInputInfoNode = document.querySelector('.popup__info_input');
  ProfileNameNode.textContent = FormInputNameNode.value;
  ProfileInfoNode.textContent = FormInputInfoNode.value;
  document.querySelector('.popup__name_input').setAttribute('placeholder',FormInputNameNode.value);
  document.querySelector('.popup__info_input').setAttribute('placeholder',FormInputInfoNode.value);
}
