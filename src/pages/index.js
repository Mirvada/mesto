import "../pages/index.css"
import {
  initialCards,
  validConfig,
  cardList,
  popupEdit,
  popupAdd,
  popupViewer,
  user,
  buttonEdit,
  buttonAdd,
  formEdit,
  formAdd,
  nameInput,
  aboutInput
} from "../utils/constants.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Cards.js";

const renderCards = new Section({
  items: initialCards,
  renderer: (item) => {
    renderCards.addItem(createCard(item));
  }
}, cardList);

const imagePopup = new PopupWithImage(popupViewer);

const createCard = (item) => {
  const card = new Card(item, '#card-template', popupViewer, {
    handleCardClick: (name, link) => {
      imagePopup.open(name, link);
    }
  });

  const cardElement = card.generateCard();

  return cardElement;
};

const userInfo = new UserInfo({ user });

const popupFormEdit = new PopupWithForm(popupEdit, {
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  }
});

const popupFormAdd = new PopupWithForm(popupAdd, {
  handleFormSubmit: (formData) => {
    cardList.prepend(createCard({ name: formData.title, link: formData.link }));
  }
})

//Слушатели формы
popupFormEdit.setEventListeners();
popupFormAdd.setEventListeners();
imagePopup.setEventListeners();

// Слушатели открытия popup
buttonEdit.addEventListener('click', () => {
  popupFormEdit.open();
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = info;
  formEditValidation.resetValidation();
});

buttonAdd.addEventListener('click', () => {
  formAddValidation.resetValidation();
  popupFormAdd.open();
});

// Вызов валидации формы
const formAddValidation = new FormValidator(validConfig, formAdd);
formAddValidation.enableValidation();
const formEditValidation = new FormValidator(validConfig, formEdit);
formEditValidation.enableValidation();

// Вызов функции с массивом карточек
renderCards.renderer();
