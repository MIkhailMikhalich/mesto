class API {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  getProfile() {

    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  setProfileData(name, info) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: info
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  setProfileAvatar(src) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: src
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  postCard(data) {
    return fetch(`${this._url}cards`,
      {
        method: 'POST',
        headers: this._headers,

        body: JSON.stringify({
          name: data.name,
          link: data.link,
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  deleteCard(cardID) {
    return fetch(`${this._url}cards/${cardID}`,
      {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  putLike(cardID) {
    return fetch(`${this._url}cards/likes/${cardID}`,
      {
        method: 'PUT',
        headers: this._headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });

  }
  unPutLike(cardID) {
    return fetch(`${this._url}cards/likes/${cardID}`,
      {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

}



export { API };
