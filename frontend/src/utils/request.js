const URL_DOMAIN = 'http://localhost:';
const PORT = 3001;
const BASE = URL_DOMAIN + PORT.toString();

export const urlGetProducts = BASE;

export const getRequestInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
