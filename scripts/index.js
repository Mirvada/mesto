//Проектная работа №4
const popupEditForm = document.querySelector('.popup_edit');
const popupAddForm = document.querySelector('.popup_add');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonCloseList = document.querySelectorAll('.popup__button-close');
const buttonAdd = document.querySelector('.profile__button-add');

const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');
const nameProfile = document.querySelector('.profile__nickname');
const infoProfile = document.querySelector('.profile__user-info');

const formEdit = document.querySelector('.popup__form_edit');

// Открытие формы

function openForm(formOpen) {
  formOpen.classList.add('popup_opened');
  document.addEventListener('keydown', closingFormByEscape);
  formOpen.addEventListener('mousedown', closingFormByViewport);
};

buttonEdit.addEventListener('click', function () {
  openForm(popupEditForm);
  resetFormEdit();
});

buttonAdd.addEventListener('click', function () {
  openForm(popupAddForm);
  resetFormAdd();
});

// Закрытие формы

function closeForm(formClose) {
  formClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', closingFormByEscape);
  formClose.removeEventListener('mousedown', closingFormByViewport);
};

buttonCloseList.forEach(function (button) {
  button.addEventListener('click', function() {
    closeForm(button.closest('.popup'));
  });
});

function closingFormByEscape(evt) {
  if (evt.key == 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closeForm(popup);
  };
};

function closingFormByViewport (evt) {
  if(evt.target == evt.target.classList.contains('popup')) {
    closeForm(evt.target);
  };
};

// Сброс формы редактирования

function resetFormEdit() {
  nameInput.value = nameProfile.textContent;
  infoInput.value = infoProfile.textContent;
}

// Редактирование имени и информации

function handleFormEditSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  infoProfile.textContent = infoInput.value;

  closeForm(popupEditForm);
}

formEdit.addEventListener('submit', handleFormEditSubmit);

// Проектная работа №5

const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;

const formAdd = document.querySelector('.popup__form_add');

const popupViewerForm = document.querySelector('.popup_viewer');
const viewerTitle = popupViewerForm.querySelector('.popup__viewer-title');
const viewerImg = popupViewerForm.querySelector('.popup__viewer-img');

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardText = cardElement.querySelector('.card__text');
  const cardImg = cardElement.querySelector('.card__img');
  const buttonDelete = cardElement.querySelector('.card__button-trash');

  // Создание карточки

  cardText.textContent = name;
  cardImg.src = link;
  cardImg.alt = name;

  // Лайки

  cardElement.querySelector('.card__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button-like_active');
  });

  // Удаление карточки

  buttonDelete.addEventListener('click', function () {
    cardElement.remove();
  });

  // // Открытие картинки

  cardImg.addEventListener('click', function () {
    openForm(popupViewerForm);
    viewerTitle.textContent = name;
    viewerImg.src = link;
    viewerImg.alt = name;
  });

  closeForm(popupAddForm);

  return cardElement;
};

// Сброс формы добавления

function resetFormAdd() {
  document.querySelector('.popup__form_add').reset();
  enableValidation(validConfig);
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
  const nameCardInput = document.querySelector('.popup__input_type_title').value;
  const linkCardInput = document.querySelector('.popup__input_type_link').value;

  cardList.prepend(createCard(nameCardInput, linkCardInput));

  closeForm(evt.target);
};

formAdd.addEventListener('submit', handleFormAddSubmit);
