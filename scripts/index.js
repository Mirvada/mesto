import {initialCards, Card} from "./cards.js";

const popupEditForm = document.querySelector('.popup_edit');
const buttonCloseList = document.querySelectorAll('.popup__button-close');
const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const nameProfile = document.querySelector('.profile__nickname');
const infoProfile = document.querySelector('.profile__user-info');

const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');

const cardList = document.querySelector('.cards');

const popupAddForm = document.querySelector('.popup_add');
const nameCardInput = document.querySelector('.popup__input_type_title');
const linkCardInput = document.querySelector('.popup__input_type_link');

const popupViewer = document.querySelector('.popup_viewer');
const viewerTitle = popupViewer.querySelector('.popup__viewer-title');
const viewerImg = popupViewer.querySelector('.popup__viewer-img');


// Открытие popup

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closingFormByEscape);
  popup.addEventListener('mousedown', closingFormByViewport);
};

function openPopupViewer (name, link) {
  viewerTitle.textContent = name;
  viewerImg.src = link;
  viewerImg.alt = name;

  openPopup(popupViewer);
}

buttonEdit.addEventListener('click', function () {
  openPopup(popupEditForm);
  resetFormEdit();
});

buttonAdd.addEventListener('click', function () {
  openPopup(popupAddForm);
  resetFormAdd();
});

// Закрытие popup

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closingFormByEscape);
  popup.removeEventListener('mousedown', closingFormByViewport);
};


function closingFormByEscape(evt) {
  if (evt.key == 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  };
};

function closingFormByViewport(evt) {
  if(evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
};

buttonCloseList.forEach(function (button) {
  const popupActive = button.closest('.popup');
  button.addEventListener('click', function() {
    closePopup(popupActive);
  });
});



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

  closePopup(popupEditForm);
}

formEdit.addEventListener('submit', handleFormEditSubmit);


// Сброс формы добавления

function resetFormAdd() {
  formAdd.reset();
}


// Функция создания экземпляра карточки

function createCard(item) {
  const card = new Card(item, '#card-template', openPopupViewer);
  const cardElement = card.generateCard();

  return cardElement;
}

// Добавление карточек из формы

function handleFormAddSubmit(evt) {
  evt.preventDefault();

  cardList.prepend(createCard({name: nameCardInput.value, link: linkCardInput.value}));

  closePopup(popupAddForm);
};

formAdd.addEventListener('submit', handleFormAddSubmit);

// Добавление карточек из массива

function addCardFromArray(item) {
  item.forEach(function (card) {
    cardList.append(createCard(card));
  });
}

addCardFromArray(initialCards);
