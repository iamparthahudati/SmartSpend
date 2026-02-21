import axios from 'axios';
import {
  BankApiResponse,
  EditorChoiceApiResponse,
  HomeCardResponse,
  HomeCategoryApiResponse,
} from '../screens/HomeScreen/type';
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

export const getHomeEditorChoice = async (): Promise<
  EditorChoiceApiResponse | ApiError
> => {
  try {
    const response = await apiClient.get<EditorChoiceApiResponse>(
      ENDPOINTS.GET_EDITOR_CHOICE,
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

export const getHomeCategories = async (): Promise<
  HomeCategoryApiResponse | ApiError
> => {
  try {
    const response = await apiClient.get<HomeCategoryApiResponse>(
      ENDPOINTS.GET_HOME_CATEGORIES,
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
export const getHomeBanks = async (): Promise<BankApiResponse | ApiError> => {
  try {
    const response = await apiClient.get<BankApiResponse>(
      ENDPOINTS.GET_HOME_BANKS,
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

export const getCardsByCategory = async (
  categoryId: string,
): Promise<HomeCategoryApiResponse | ApiError> => {
  try {
    const response = await apiClient.get<HomeCategoryApiResponse>(
      `${ENDPOINTS.GET_CARDS_BY_CATEGORY}/${categoryId}`,
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
