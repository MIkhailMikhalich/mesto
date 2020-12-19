const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inputInvalidClass: 'popup__input-invalid',
  buttonInvalidClass: 'popup__save-button_disabled',
};

function showErr(form, input, config)
{
  const errormes = form.querySelector(`#${input.id}-error`);
  errormes.textContent = input.validationMessage;
  input.classList.add(config.inputInvalidClass);
}
function hideErr(form, input, config)
{
  const errormes = form.querySelector(`#${input.id}-error`);
  errormes.textContent = "";
  input.classList.remove(config.inputInvalidClass);
}
function checkValidity(form,input,config)
{
  if(input.validity.valid){
    hideErr(form,input,config);
  }
  else
  {
    showErr(form,input,config);
  }
}
function setButtonState(button, isActive,config)
{

  if (isActive)
  {
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  }
  else
  {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  }
}
function setEvents(form,config)
{
  const inputList = form.querySelectorAll(config.inputSelector);
  const saveButton = form.querySelector(config.submitButtonSelector)
  inputList.forEach(function(input){
    input.addEventListener('input', function(evt){
      checkValidity(form, input,config);
      setButtonState(saveButton,form.checkValidity(),config);
    })
  })
}

function enableValidate(config)
{

  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach(function(form){
    setEvents(form,config);

  const saveButton = form.querySelector(config.submitButtonSelector);
  setButtonState(saveButton,form.checkValidity(),config);
})
}
enableValidate(validationConfig);
