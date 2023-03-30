export const validConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const user = {
  nameInput: '.popup__input_type_name',
  aboutInput: '.popup__input_type_info',
  name: '.profile__nickname',
  about: '.profile__user-info',
  avatar: '.profile__avatar'
}

export const apiConfig = {
  link: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
    'Content-Type': 'application/json'
  }
}

export const cardList = document.querySelector('.cards');

export const buttonEdit = document.querySelector('.profile__button-edit');
export const buttonAdd = document.querySelector('.profile__button-add');
export const buttonEditAvatar = document.querySelector('.profile__wrapper-avatar');

export const formEdit = document.querySelector('.popup__form_edit');
export const formAdd = document.querySelector('.popup__form_add');
export const formEditAvatar = document.querySelector('.popup__form_avatar');

export const nameInput = document.querySelector('.popup__input_type_name');
export const aboutInput = document.querySelector('.popup__input_type_info');
