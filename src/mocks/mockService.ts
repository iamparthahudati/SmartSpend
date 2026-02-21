import MockAdapter from 'axios-mock-adapter';
import apiClient from '../services/apiClient';
import { getCardsByCategory } from './getCardsByCategory.api';
import {
  getHomeBanks,
  getHomeCategories,
  getHomeEditorChoice,
} from './getEditorChoice.api';
import { getHomeBanner } from './getHomeScreenBanner.api';
import { MockHandler } from './mockTypes';

const mock = new MockAdapter(apiClient, { delayResponse: 500 });

const register = (handler: MockHandler[] | MockHandler) => {
  if (Array.isArray(handler)) {
    handler.forEach(register);
  } else {
    const method = handler.method.toLowerCase();
    switch (method) {
      case 'get':
        mock.onGet(handler.url).reply(handler.handler);
        break;
      case 'post':
        mock.onPost(handler.url).reply(handler.handler);
        break;
    }
  }
};
register([
  getHomeBanner,
  getHomeEditorChoice,
  getHomeCategories,
  getHomeBanks,
  getCardsByCategory,
]);

export default mock;
