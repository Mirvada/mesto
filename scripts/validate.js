const validConfig = {
  formElement: '.popup__form',
  formInput: '.popup__input',
  formError: '.popup__button',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, formInput, errorMessage) => { // создаем функцию которая показывает ошибку
  const formError = formElement.querySelector(`.${formInput.id}-error`); //получаем спан в который запишем ошибку

  formInput.classList.add('popup__input_type_error'); // добавляем красную линию инпуту с ошибкой
  formError.textContent = errorMessage; // записываем браузерную ошибку в спан
  formError.classList.add('popup__error_visible'); // делаем спан видимым
};

const hideInputError = (formElement, formInput) => { // создаем функцию которая удаляет ошибку
  const formError = formElement.querySelector(`.${formInput.id}-error`); //получаем спан в который запишем ошибку

  formInput.classList.remove('popup__input_type_error');
  formError.classList.remove('popup__error_visible');
  formError.textContent = ''; // очищаем спан от текста ошибки
};

const isValid = (formElement, formInput) => { // функция проверки валидиции инпутов
  if(!formInput.validity.valid) { // если инпут с ошибкой, то показываем ошибку
    //передаем в функцию показа ошибки инпут с ошибкой и текст ошибки
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput); // вызываем функцию передаем аргументы инпута с ошибкой
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const formButton = formElement.querySelector('.popup__button-save');

  toggleButtonState(inputList, formButton);

  inputList.forEach(formInput => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput);

      toggleButtonState(inputList, formButton);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach(formElement => {
    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};

const toggleButtonState = (inputList, formButton) => {
  if (hasInvalidInput(inputList)) {
    formButton.classList.add('popup__button-save_disabled');
    formButton.disabled = true;
  } else {
    formButton.classList.remove('popup__button-save_disabled');
    formButton.disabled = false;
  }
};

enableValidation(validConfig);