import axios from 'axios';
import { HomeCardResponse } from '../screens/HomeScreen/type';
import { ENDPOINTS } from '../utils/constants';
import apiClient from './apiClient';

export type ApiError = {
  success: boolean;
  message: string;
  data?: any;
};

export const getHomeBanner = async (): Promise<HomeCardResponse | ApiError> => {
  try {
    const response = await apiClient.get<HomeCardResponse>(
      ENDPOINTS.GET_HOME_BANNER,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          'Something went wrong. Please try again.',
      };
    }

    return {
      success: false,
      message: 'Unexpected error occurred',
    };
  }
};
