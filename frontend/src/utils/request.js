const URL_DOMAIN = 'http://localhost:';
const PORT = 3001;
const BASE = URL_DOMAIN + PORT.toString();

export const urlGetCarros = BASE + '/';

export const urlGetCarro = BASE + '/{id}';

export const urlGetMarcas = BASE + '/marcas/marcas';

export const getRequestInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
