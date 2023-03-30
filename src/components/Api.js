export default class Api {
<<<<<<< HEAD
  constructor() { }
  //1. Загрузка информации о пользователе с сервера - ГОТОВО
  getUserInfo() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      }
=======
  constructor(apiConfig) {
    this._headers = apiConfig.headers;
    this._link = apiConfig.link;
  }
  //1. Загрузка информации о пользователе с сервера - ГОТОВО
  getUserInfo() {
    return fetch(`${this._link}/users/me`, {
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
    })
      .then(res => this._responseProcessing(res))
  }

  //3. Редактирование профиля -ГОТОВО
  sendEditedUserData(data) {
<<<<<<< HEAD
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
=======
    return fetch(`${this._link}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.info
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
      })
    })
      .then(res => this._responseProcessing(res))
  }

  //9. Обновление аватара пользователя
  updateAvatar({ avatar }) {
<<<<<<< HEAD
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        'Content-Type': 'application/json'
      },
=======
    return fetch(`${this._link}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
      body: JSON.stringify({ avatar })
    })
      .then(res => this._responseProcessing(res))
  }

  //2. Загрузка карточек с сервера - ГОТОВО
  getInitialCards() {
<<<<<<< HEAD
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      }
=======
    return fetch(`${this._link}/cards`, {
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
    })
      .then(res => this._responseProcessing(res))
  }
  //4. Добавление новой карточки - ГОТОВО
  addCard(card) {
<<<<<<< HEAD
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
      method: 'POST',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        'Content-Type': 'application/json'
      },
=======
    return fetch(`${this._link}/cards`, {
      method: 'POST',
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then(res => this._responseProcessing(res))
  }
  //5. Отображение количества лайков карточки
  getLikes() {
<<<<<<< HEAD
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
=======
    return fetch(`${this._link}/cards`, {
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
    })
      .then(res => this._responseProcessing(res))
  }
  // Поставить лайк -ГОТОВО
  putLike(cardId) {
<<<<<<< HEAD
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
=======
    return fetch(`${this._link}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
    })
      .then(res => this._responseProcessing(res))
  }
  // Удалить лайк карточки -ГОТОВО
  deleteLike(cardId) {
<<<<<<< HEAD
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
=======
    return fetch(`${this._link}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
    })
      .then(res => this._responseProcessing(res))
  }
  //6. Попап удаления карточки
  deleteCard(cardId) {
<<<<<<< HEAD
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-62/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71'
      },
=======
    return fetch(`${this._link}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
>>>>>>> 3ef1180f9c0605d9c560a67585604fd03ab455d6
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
