//Проектная работа №4
const popupEditForm = document.querySelector('.popup_edit');
const popupAddForm = document.querySelector('.popup_add');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelectorAll('.popup__button-close');
const buttonAdd = document.querySelector('.profile__button-add');

const nameInput = document.querySelector('.popup__input_nickname');
const infoInput = document.querySelector('.popup__input_info');
const nameProfile = document.querySelector('.profile__nickname');
const infoProfile = document.querySelector('.profile__user-info');

const formElement = document.querySelector('.popup__form_edit');

// Открытие формы

function openingForm(formOpen) {
  formOpen.classList.add('popup_opened');
};

buttonEdit.addEventListener('click', function () {
  openingForm(popupEditForm);
  resetFormEdit();
});

buttonAdd.addEventListener('click', function () {
  openingForm(popupAddForm);
  resetFormAdd();
});

// Закрытие формы

function closeForm(button) {
  button.closest('.popup').classList.remove('popup_opened');
}

buttonClose.forEach(function (button) {
  button.addEventListener('click', () => closeForm(button));
});

// Сброс формы редактирования

function resetFormEdit() {
  nameInput.value = nameProfile.textContent;
  infoInput.value = infoProfile.textContent;
}

// Редактирование имени и информации

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  infoProfile.textContent = infoInput.value;

  closeForm(evt.target);
}

formElement.addEventListener('submit', handleFormSubmit);

// Проектная работа №5

const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;
const formAdd = document.querySelector('.popup__form_add');
const popupViewerForm = document.querySelector('.popup_viewer');

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardText = cardElement.querySelector('.card__text');
  const cardImg = cardElement.querySelector('.card__img');

  // Создание карточки

  cardText.textContent = name;
  cardImg.src = link;
  cardImg.alt = name;

  // Лайки

  cardElement.querySelector('.card__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button-like_active');
  });

  // Закрытие формы

  cardElement.querySelector('.card__button-trash').addEventListener('click', function (button) {
    let card = button.target.closest('.card');
    card.remove();
  });

  // // Открытие картинки

  cardImg.addEventListener('click', function () {
    openingForm(popupViewerForm);
    document.querySelector('.popup__viewer-title').textContent = name;
    document.querySelector('.popup__viewer-img').src = link;
    document.querySelector('.popup__viewer-img').alt = name;
  });

  return cardElement;
};

// Сброс формы добавления

function resetFormAdd() {
  document.querySelector('.popup__form_add').reset();
}

// Добавление карточки из массива

function addArr(card) {
  const cardArr = initialCards.map(function (card) {
    return createCard(card.name, card.link);
  });
  cardList.prepend(...cardArr);
};

addArr();

// Добавление карточек из формы

function handleFormAddSubmit(evt) {
  evt.preventDefault();

  const nameCardInput = document.querySelector('.popup__input_photo-title').value;
  const linkCardInput = document.querySelector('.popup__input_photo-link').value;

  cardList.prepend(createCard(nameCardInput, linkCardInput));

  closeForm(evt.target);
};

formAdd.addEventListener('submit', handleFormAddSubmit);
