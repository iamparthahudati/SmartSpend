import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.creditcard.app',
  timeout: 15000,
});

export default apiClient;
