import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._submitForm = this._popupSelector.querySelector('.popup__form');
    this._inputList = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
  }

  close() {
    super.close();
    this._submitForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._submitForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this.close();
    });

  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
}