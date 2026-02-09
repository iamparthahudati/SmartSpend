import { ENDPOINTS } from '../utils/constants';
import { MockHandler } from './mockTypes';

export const getCategoryApi = async () => {
  return [
    { id: '1', name: 'Travel' },
    { id: '2', name: 'Dining' },
    { id: '3', name: 'Groceries' },
    { id: '4', name: 'Bills' },
    { id: '5', name: 'Entertainment' },
  ];
};

export const getCategory: MockHandler = {
  url: ENDPOINTS.GET_CATEGORIES,
  method: 'get',
  handler: () => [200, getCategoryApi()],
};
