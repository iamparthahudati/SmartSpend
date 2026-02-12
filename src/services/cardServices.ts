import { getApps } from '@react-native-firebase/app';
import { getCategoryApi } from '../mocks/getCategory.api';
import { apiClient } from './apiClient';

export const getRecommendedCards = async (payload: any) => {
  const { data } = await apiClient.post('/recommend', payload);
  return data;
};

export const getCategoryies = async () => {
  // Use mock data when running in a testing environment
  if (getApps().length === 0) {
    return getCategoryApi();
  } else {
    const { data } = await apiClient.get('/categories');
    return data;
  }
};
