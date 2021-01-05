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