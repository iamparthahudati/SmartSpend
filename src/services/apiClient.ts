import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.creditcard.app',
  timeout: 15000,
});
