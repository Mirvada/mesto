export default class Api {
  constructor(link, token) {
  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-62/users/me', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        contentType: 'application/json'
      }
    })
      .then(res => res.json())
  }

  getCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-62/cards', {
      headers: {
        authorization: 'ddab6b6e-12d5-4645-a33d-6f5a3092be71',
        contentType: 'application/json'
      }
    })
      .then(res => res.json())
  }

  sendEditedUserData(data) {
    return fetch('https://nomoreparties.co/v1/cohort-62/users/me', {
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
      .then(res => res.json())
  }

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
      .then(res => res.json())
      .then(res => console.log(res))
  }
}
