import axios from 'axios';

// Definindo a URL base do back-end
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;
