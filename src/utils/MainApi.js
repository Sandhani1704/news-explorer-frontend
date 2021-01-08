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
        // .then((res) => {
        //     return res;
        // })
        .catch((err) => console.log(err))
};

export const login = (password, email) => {
    return fetch(`${MAIN_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email})
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