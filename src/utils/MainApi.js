import { MAIN_URL } from './utils';

export const register = (password, email, name) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email, name })
  })

    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err))
};

export const login = (password, email) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })

    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err))
};

export const getContent = (token) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
}

export const saveArticle = ({ keyword, title, text, date, source, link, image }) => {
  const article = { keyword, title, text, date, source, link, image };

  return fetch(`${MAIN_URL}/articles`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(article)
  })
    .then(res => res.json())
    .catch((err) => { return Promise.reject(err.message) });
}

// получить все сохраненные новости
export const getAllArticles = () => {
  return fetch(
    `${MAIN_URL}/articles`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => { return Promise.reject(err.message) });
}

// удаляет сохранённую статью  по _id
export const deleteArticle = (articleId) => {
  return fetch(`${MAIN_URL}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => { return Promise.reject(err.message) });
}
