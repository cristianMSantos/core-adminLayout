import axios from 'axios';

let api = axios.create({
    baseURL: 'http://localhost:8000'
    // baseURL: 'https://codecase.com.br/django'
});

export default api;