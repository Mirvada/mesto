export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._buttonClose = this._popupSelector.querySelector('.popup__button-close');

    this._buttonClose.addEventListener('click', () => {
      this.close();
    });

    this._popupSelector.addEventListener('mousedown', evt => {
      if (evt.target.classList.contains('popup')) {
        this.close();
      };
    });
  }

  _handleEscClose(evt) {
    if (evt.key == 'Escape') {
      this.close();
    };
  }
}
