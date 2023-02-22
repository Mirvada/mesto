export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export class Card {
  constructor(data, templateSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImg = this._element.querySelector('.card__img');
    this._cardTitle = this._element.querySelector('.card__text');
    this._buttonLike = this._element.querySelector('.card__button-like');
    this._buttonDelete = this._element.querySelector('.card__button-delete');

    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _handleOpenPopup() {
    this._openPopup(this._name, this._link);
  }


  _setEventListeners() {

    this._cardImg.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._buttonLike.addEventListener('click', (evt) => {
      this._setLikeButtonState(evt);
    });

    this._buttonDelete.addEventListener('click', () => {
      this._removeCard();
    });
  }

  _setLikeButtonState(evt) {
    evt.target.classList.toggle('card__button-like_active');
  }

  _removeCard() {
      this._element.remove();
  }
}
