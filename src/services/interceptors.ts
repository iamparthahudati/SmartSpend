import apiClient from './apiClient';

export const setupInterceptors = () => {
  apiClient.interceptors.request.use(config => {
    console.log('Request:', config.url);
    return config;
  });

  apiClient.interceptors.response.use(
    response => response,
    error => {
      console.log('API Error:', error);
      return Promise.reject(error);
    },
  );
};
