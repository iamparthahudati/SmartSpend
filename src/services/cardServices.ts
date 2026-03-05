import apiClient from './apiClient';

export const getRecommendedCards = async (payload: any) => {
  const { data } = await apiClient.post('/recommend', payload);
  return data;
};

export const getCategoryies = async () => {
  const { data } = await apiClient.get('/categories');
  return data;
};

export const getCardsByCategoryies = async (catId: string) => {
  const { data } = await apiClient.get('/categories');
  return data;
};
