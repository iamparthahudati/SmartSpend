import { ENDPOINTS } from '../utils/constants';
import { MockHandler } from './mockTypes';

export const getHomeScreenBannerApi = {
  success: true,
  data: [
    {
      id: 'card_001',
      img: 'https://cdn.yourapp.com/images/shopping_offer_bg.png',
      title: 'Save up to ₹15,000/year on shopping',
      link: 'app://offers/shopping',
    },
    {
      id: 'card_002',
      img: 'https://cdn.yourapp.com/images/travel_offer_bg.png',
      title: 'Complimentary airport lounge access',
      link: 'app://offers/travel',
    },
    {
      id: 'card_003',
      img: 'https://cdn.yourapp.com/images/rewards_offer_bg.png',
      title: 'Earn reward points on every spend',
      link: 'app://offers/rewards',
    },
  ],
};

export const getHomeBanner: MockHandler = {
  url: ENDPOINTS.GET_HOME_BANNER,
  method: 'get',
  handler: () => [200, getHomeScreenBannerApi],
};
