const ClosebuttonNode = document.querySelector('.popup__closebutton');
const EditbuttonNode = document.querySelector('.profile__editbutton');
const PopupNode = document.querySelector('.popup');

EditbuttonNode.addEventListener('click', togglePopupVisibility);
ClosebuttonNode.addEventListener('click', togglePopupVisibility);


function togglePopupVisibility()
{
  PopupNode.classList.toggle('popup_visible');
  PopupNode.classList.toggle('popup_hidden');
}



const ProfileNameFormNode = document.querySelector('.popup__nameform')
const ProfileInfoFormNode = document.querySelector('.popup__infoform')
const ProfileNameNode = document.querySelector('.profile__name');
const ProfileInfoNode = document.querySelector('.profile__text');
const SubmitButtonNode = document.querySelector('.popup__savebutton');

SubmitButtonNode.addEventListener('click',ButtonSummit);


ProfileNameFormNode.addEventListener('submit', NameSubmit);
ProfileInfoFormNode.addEventListener('submit', InfoSubmit);

function NameSubmit(event)
{

  event.preventDefault();
  const formInputNode = event.currentTarget.querySelector('.popup__nameinput');
  ProfileNameNode.textContent = formInputNode.value;
  document.querySelector('.popup__nameinput').setAttribute('placeholder',formInputNode.value);

}
function InfoSubmit(event)
{
  event.preventDefault();
  const formInputNode = event.currentTarget.querySelector('.popup__infoinput');
  ProfileInfoNode.textContent = formInputNode.value;
  document.querySelector('.popup__infoinput').setAttribute('placeholder',formInputNode.value);
}

function ButtonSummit (event)
{
  event.preventDefault();
  const FormInputNameNode = document.querySelector('.popup__nameinput');
  const FormInputInfoNode = document.querySelector('.popup__infoinput');
  ProfileNameNode.textContent = FormInputNameNode.value;
  ProfileInfoNode.textContent = FormInputInfoNode.value;
  document.querySelector('.popup__nameinput').setAttribute('placeholder',FormInputNameNode.value);
  document.querySelector('.popup__infoinput').setAttribute('placeholder',FormInputInfoNode.value);
}
