class Api {
  constructor(apiSetting) {
    this._url = apiSetting.url;
    this._headers = apiSetting.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfoApi() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  setUserInfoApi(name, job) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
      .then(this._checkResponse);
  }

  addNewElement(title, url) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: url
      })
    })
      .then(this._checkResponse);
  }

  like(id) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  dislike(id) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }


  deleteElement(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  changeAvatar(item) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: item.url
      })
    })
      .then(this._checkResponse);
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-48/',
  headers: {
    authorization: 'dc493407-c65d-4755-8236-dab7c7a9e0c4',
    'Content-Type': 'application/json'
  }
});

export default api;