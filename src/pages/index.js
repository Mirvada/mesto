import "../pages/index.css"
import {
  validConfig,
  apiConfig,
  cardList,
  user,
  buttonEdit,
  buttonAdd,
  buttonEditAvatar,
  formEdit,
  formAdd,
  formEditAvatar,
  nameInput,
  aboutInput
} from "../utils/constants.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Cards.js";
import Api from "../components/Api.js"

const api = new Api(apiConfig)

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardList]) => {
    userInfo.setUserInfo({ name: userData.name, about: userData.about })
    userInfo.updateUserAvatar(userData.avatar)
    userId = userData._id;

    renderCards.renderer(cardList)
  })
  .catch(err => console.log(`ошибка: ${err}`))

const renderCards = new Section({
  renderer: (item) => {
    renderCards.addItem(createCard(item));
  }
}, cardList);

const imagePopup = new PopupWithImage('.popup_viewer');

const popupDeletionRequest = new PopupWithConfirmation('.popup_deletion-request', {
  handleSubmitCardDelete: (card, cardId) => {
    popupDeletionRequest.renderLoading('Удаление...')
    api.deleteCard(cardId)
      .then(() => {
        card.removeCard()
        popupDeletionRequest.close()
      })
      .catch(err => console.log(`ошибка: ${err}`))
      .finally(() => {
        popupDeletionRequest.renderLoading('Удалить')
      })
  }
});

const createCard = (item) => {
  const card = new Card(item, userId, '#card-template', '.popup_viewer', {
    handleCardClick: (name, link) => {
      imagePopup.open(name, link);
    },
    handleLike: (cardId) => {
      api.putLike(cardId)
        .then(res => card.countCardLike(res))
        .catch(err => console.log(`ошибка: ${err}`))
    },
    handleDislike: (cardId) => {
      api.deleteLike(cardId)
        .then(res => card.countCardLike(res))
        .catch(err => console.log(`ошибка: ${err}`))
    },
    handleCardDelete: (card, cardId) => {
      popupDeletionRequest.open(card, cardId);
    },
  });

  const cardElement = card.generateCard();

  return cardElement;
};

const userInfo = new UserInfo({ user });

const popupFormEdit = new PopupWithForm('.popup_edit', {
  handleFormSubmit: (formData) => {
    popupFormEdit.renderLoading('Сохранение...');
    api.sendEditedUserData(formData)
      .then(res => {
        userInfo.setUserInfo(res);
        popupFormEdit.close();
      })
      .catch(err => console.log(`ошибка: ${err}`))
      .finally(() => {
        popupFormEdit.renderLoading('Сохранить');
      })
  }
});

const popupFormAdd = new PopupWithForm('.popup_add', {
  handleFormSubmit: (formData) => {
    popupFormAdd.renderLoading('Создание...');
    api.addCard({
      name: formData.title,
      link: formData.link
    })
      .then(res => {
        renderCards.prependItem(createCard(res));
        popupFormAdd.close();
      })
      .catch(err => console.log(`ошибка: ${err}`))
      .finally(() => {
        popupFormAdd.renderLoading('Создать')
      })
  }
})

const popupFormAvatar = new PopupWithForm('.popup_add-avatar', {
  handleFormSubmit: (formData) => {
    popupFormAvatar.renderLoading('Сохранение...'),
      api.updateAvatar({
        avatar: formData.avatar
      })
        .then(res => {
          userInfo.updateUserAvatar(res.avatar);
          popupFormAvatar.close();
        })
        .catch(err => console.log(`ошибка: ${err}`))
        .finally(() => {
          popupFormAvatar.renderLoading('Сохранить')
        })
  }
})

//Слушатели формы
popupFormEdit.setEventListeners();
popupFormAdd.setEventListeners();
imagePopup.setEventListeners();
popupFormAvatar.setEventListeners();
popupDeletionRequest.setEventListeners();

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

buttonEditAvatar.addEventListener('click', () => {
  formEditAvatarValidation.resetValidation();
  popupFormAvatar.open()
})

// Вызов валидации формы
const formAddValidation = new FormValidator(validConfig, formAdd);
formAddValidation.enableValidation();
const formEditValidation = new FormValidator(validConfig, formEdit);
formEditValidation.enableValidation();
const formEditAvatarValidation = new FormValidator(validConfig, formEditAvatar);
formEditAvatarValidation.enableValidation();
