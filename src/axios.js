import axios from 'axios';

let api = axios.create({
    baseURL: 'https://www.codecase.com.br/api/public/api/'
    // baseURL: 'https://codecase.com.br/django'
});

export default api;