import { API_KEY, NEWS_URL } from './utils';

let now = new Date();

const startDate = now.toISOString().slice(0, 10);
now.setDate(now.getDate() - 7);
const finishDate = now.toISOString().slice(0, 10)

export const getNews = (keyword) => {
  return fetch(`${NEWS_URL}q=${keyword}&apiKey=${API_KEY}&from=${finishDate}&to=${startDate}&sortBy=publishedAt&pageSize=100`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
}
