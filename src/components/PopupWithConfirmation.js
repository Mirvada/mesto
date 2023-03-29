import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { handleSubmitCardDelete }) {
    super(popupSelector);
    this._handleFormSubmit = handleSubmitCardDelete;
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();

    this._submitButton.addEventListener('click', () => {
      this._handleFormSubmit(this._card, this._cardId);
    });
  }
}
