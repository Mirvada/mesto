export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector  = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._formButton = this._formElement.querySelector(this._submitButtonSelector);
  };

  _showInputError(formInput) {
    this._formError = this._formElement.querySelector(`.${formInput.id}-error`);

    formInput.classList.add(this._inputErrorClass);
    this._formError.textContent = formInput.validationMessage;
    this._formError.classList.add(this._errorClass);
  };

  _hideInputError(formInput) {
    this._formError = this._formElement.querySelector(`.${formInput.id}-error`);

    formInput.classList.remove(this._inputErrorClass);
    this._formError.classList.remove(this._errorClass);
    this._formError.textContent = '';
  };

  _hasInvalidInput() {
    return this._inputList.some((formInput) => {
      return !formInput.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._formButton.classList.add(this._inactiveButtonClass);
      this._formButton.disabled = true;
    } else {
      this._formButton.classList.remove(this._inactiveButtonClass);
      this._formButton.disabled = false;
    }
  };

  _isValid(formInput) {
    if(!formInput.validity.valid) {
      this._showInputError(formInput);
    } else {
      this._hideInputError(formInput);
    }
  };

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach(formInput => {
      formInput.addEventListener('input', () => {
        this._isValid(formInput);

        this._toggleButtonState();
      });
    });
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach(formInput => {
      this._hideInputError(formInput);
    });
  };

  enableValidation() {
    this._setEventListeners();
  };
};
