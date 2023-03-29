export default class Card {
  constructor(data, userId, templateSelector, popupSelector, { handleCardClick, handleLike, handleDislike, handleCardDelete }) {
    this._dataCard = data;
    this._userId = userId;
    this._name = this._dataCard.name;
    this._link = this._dataCard.link;
    this._templateSelector = templateSelector;
    this._popupSelector = document.querySelector(popupSelector);
    this._handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this._handleDislike = handleDislike;
    this._handleCardDelete = handleCardDelete;
  };

  _handleOpenPopup() {
    this._handleCardClick(this._name, this._link);
  };

  removeCard() {
    this._element.remove();
  };

  _setEventListeners() {
    if (this._userId !== this._dataCard.owner._id) {
      this._buttonDelete.remove();
    } else {
      this._buttonDelete.addEventListener('click', () => {
        this._handleCardDelete(this, this._dataCard._id);
      });
    }

    this._cardImg.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._buttonLike.addEventListener('click', () => {
      this._setLikeButtonState();
    });
  };

  _isLikes() {
    return this._likes.find(user => this._userId === user._id)
  }

  countCardLike(dataCard) {
    this._likes = dataCard.likes;

    this._countLike.textContent = this._likes.length;

    if (this._isLikes()) {
      this._buttonLike.classList.add('card__button-like_active');
    } else {
      this._buttonLike.classList.remove('card__button-like_active');
    }
  }

  _setLikeButtonState() {
    if (this._isLikes()) {
      this._handleDislike(this._dataCard._id);
    } else {
      this._handleLike(this._dataCard._id);
    }
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();

    this._cardImg = this._element.querySelector('.card__img');
    this._cardTitle = this._element.querySelector('.card__text');
    this._buttonLike = this._element.querySelector('.card__button-like');
    this._buttonDelete = this._element.querySelector('.card__button-delete');
    this._countLike = this._element.querySelector('.card__count-like');

    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.textContent = this._name;

    this.countCardLike(this._dataCard);
    this._setEventListeners();

    return this._element;
  };
};
