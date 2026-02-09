import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MockHandler } from './mockTypes';

const mock = new MockAdapter(axios, { delayResponse: 500 });

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
register([]);
