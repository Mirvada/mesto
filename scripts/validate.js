const validConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

// Функция показа ошибки

const showInputError = (formElement, formInput, errorMessage, config) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);

  formInput.classList.add(config.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(config.errorClass);
};

// Функция удаления ошибки

const hideInputError = (formElement, formInput, config) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);

  formInput.classList.remove(config.inputErrorClass);
  formError.classList.remove(config.errorClass);
  formError.textContent = '';
};

// Валидация формы

const isValid = (formElement, formInput, config) => { // функция проверки валидиции инпутов
  if(!formInput.validity.valid) { // если инпут с ошибкой, то показываем ошибку
    //передаем в функцию показа ошибки инпут с ошибкой и текст ошибки
    showInputError(formElement, formInput, formInput.validationMessage, config);
  } else {
    hideInputError(formElement, formInput, config); // вызываем функцию передаем аргументы инпута с ошибкой
  }
};

// Слушатель инпутов в форме

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const formButton = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, formButton, config);

  inputList.forEach(formInput => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput, config);

      toggleButtonState(inputList, formButton, config);
    });
  });
};

// Получение формы и проверка ее на валидность

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach(formElement => {
    setEventListeners(formElement, config);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};

// Вкл\Выкл кнопки

const toggleButtonState = (inputList, formButton, config) => {
  if (hasInvalidInput(inputList)) {
    formButton.classList.add(config.inactiveButtonClass);
    formButton.disabled = true;
  } else {
    formButton.classList.remove(config.inactiveButtonClass);
    formButton.disabled = false;
  }

  formAdd.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, formButton, config);
    }, 0);
  });
};

enableValidation(validConfig);
