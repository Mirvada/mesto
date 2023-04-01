export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._submitButton = this._popup.querySelector('.popup__button-save')
  }

  open() {
    this._popup.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  renderLoading(text) {
    if (this._submitButton) {
      his._submitButton.textContent = text;
    }
  }

  setEventListeners() {
    this._buttonClose = this._popup.querySelector('.popup__button-close');

    this._buttonClose.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('mousedown', evt => {
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
