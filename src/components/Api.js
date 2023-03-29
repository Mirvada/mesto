export default class Api {
  constructor() { }
  //1. Загрузка информации о пользователе с сервера - ГОТОВО
  getUserInfo() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      }
    })
      .then(res => this._responseProcessing(res))
  }

  //3. Редактирование профиля -ГОТОВО
  sendEditedUserData(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => this._responseProcessing(res))
  }

  //9. Обновление аватара пользователя
  updateAvatar({ avatar }) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ avatar })
    })
      .then(res => this._responseProcessing(res))
  }

  //2. Загрузка карточек с сервера - ГОТОВО
  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      }
    })
      .then(res => this._responseProcessing(res))
  }
  //4. Добавление новой карточки - ГОТОВО
  addCard(card) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
      method: 'POST',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then(res => this._responseProcessing(res))
  }
  //5. Отображение количества лайков карточки
  getLikes() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
    })
      .then(res => this._responseProcessing(res))
  }
  // Поставить лайк -ГОТОВО
  putLike(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
    })
      .then(res => this._responseProcessing(res))
  }
  // Удалить лайк карточки -ГОТОВО
  deleteLike(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
    })
      .then(res => this._responseProcessing(res))
  }
  //6. Попап удаления карточки
  deleteCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
    })
      .then(res => this._responseProcessing(res))
  }

  _responseProcessing(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
