import { ENDPOINTS } from '../utils/constants';
import { MockHandler } from './mockTypes';

export const getEditorChoiceApiResponse = {
  success: true,
  data: {
    id: 'card_001',
    title: 'Card of the Month',
    cardDetails: {
      bankName: 'American Express',
      cardName: 'Platinum Reserve',
      cardNumber: '1234 XXXX XXXX 5678',
      bankIcon: 'amex',
      cardImage:
        'https://www.hdfc.bank.in/debit-cardshttps://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/cards/debit-cards/millennia-debit-card/images/millennia-debit-card.png',
      applyLink: 'url',
      benifits: [
        {
          icon: 'gree-tick',
          background: 'green',
          title: '14,000 bonus points',
        },
        {
          icon: 'gree-tick',
          background: 'green',
          title: '14,000 bonus points',
        },
      ],
    },
  },
};

export const getHomeEditorChoice: MockHandler = {
  url: ENDPOINTS.GET_EDITOR_CHOICE,
  method: 'get',
  handler: () => [200, getEditorChoiceApiResponse],
};

export const getCategoriesApiResponse = {
  success: true,
  data: [
    {
      id: 'cat_001',
      category: 'Travel',
      icon: '✈️',
      cards: [
        {
          id: 'card_001',
          bankName: 'HDFC Bank',
          cardName: 'Regalia Gold',
          cardImage: 'https://example.com/regalia.png',
          applyLink: 'https://hdfc.com/regalia',
          joiningFee: 2500,
          annualFee: 2500,
          benefits: [
            { icon: '🏨', title: '12 complimentary lounge visits' },
            { icon: '✈️', title: '5X points on travel bookings' },
            { icon: '💰', title: '2% forex markup' },
          ],
        },
        {
          id: 'card_002',
          bankName: 'Axis Bank',
          cardName: 'Atlas Credit Card',
          cardImage: 'https://example.com/atlas.png',
          applyLink: 'https://axis.com/atlas',
          joiningFee: 5000,
          annualFee: 5000,
          benefits: [
            { icon: '🏨', title: 'Unlimited lounge access' },
            { icon: '✈️', title: 'Air miles on every spend' },
            { icon: '🎁', title: '5000 welcome miles' },
          ],
        },
      ],
    },
    {
      id: 'cat_002',
      category: 'Cashback',
      icon: '💵',
      cards: [
        {
          id: 'card_003',
          bankName: 'SBI Bank',
          cardName: 'Cashback SBI Card',
          cardImage: 'https://example.com/sbi-cashback.png',
          applyLink: 'https://sbi.com/cashback',
          joiningFee: 999,
          annualFee: 999,
          benefits: [
            { icon: '💰', title: '5% cashback on online spends' },
            { icon: '🛒', title: '1% cashback on offline spends' },
            { icon: '⛽', title: '1% fuel surcharge waiver' },
          ],
        },
        {
          id: 'card_004',
          bankName: 'HDFC Bank',
          cardName: 'Millennia Credit Card',
          cardImage: 'https://example.com/millennia.png',
          applyLink: 'https://hdfc.com/millennia',
          joiningFee: 1000,
          annualFee: 1000,
          benefits: [
            { icon: '💰', title: '5% cashback on Amazon & Flipkart' },
            { icon: '🍔', title: '5% cashback on Swiggy & Zomato' },
            { icon: '🎬', title: '5% cashback on OTT platforms' },
          ],
        },
      ],
    },
    {
      id: 'cat_003',
      category: 'Shopping',
      icon: '🛍️',
      cards: [
        {
          id: 'card_005',
          bankName: 'American Express',
          cardName: 'Membership Rewards',
          cardImage: 'https://example.com/amex.png',
          applyLink: 'https://amex.com/membership',
          joiningFee: 1000,
          annualFee: 4500,
          benefits: [
            { icon: '🎁', title: '4000 bonus reward points' },
            { icon: '🛍️', title: '1 point per ₹50 spent' },
            { icon: '💳', title: 'No pre-set spending limit' },
          ],
        },
      ],
    },
    {
      id: 'cat_004',
      category: 'Fuel',
      icon: '⛽',
      cards: [
        {
          id: 'card_006',
          bankName: 'BPCL SBI',
          cardName: 'BPCL SBI Octane',
          cardImage: 'https://example.com/bpcl.png',
          applyLink: 'https://sbi.com/bpcl',
          joiningFee: 1499,
          annualFee: 1499,
          benefits: [
            { icon: '⛽', title: '7.25% value back on BPCL fuel' },
            { icon: '💰', title: '25 reward points per ₹100' },
            { icon: '🚗', title: '1% fuel surcharge waiver' },
          ],
        },
      ],
    },
  ],
};

export const getHomeCategories: MockHandler = {
  url: ENDPOINTS.GET_HOME_CATEGORIES,
  method: 'get',
  handler: () => [200, getCategoriesApiResponse],
};

export const getBanksApiResponse = {
  success: true,
  data: [
    { id: 'bank_001', bank: 'HDFC Bank', icon: '🏦' },
    { id: 'bank_002', bank: 'SBI', icon: '🏛️' },
    { id: 'bank_003', bank: 'Axis Bank', icon: '🏧' },
    { id: 'bank_004', bank: 'ICICI Bank', icon: '💳' },
    { id: 'bank_005', bank: 'Amex', icon: '💎' },
  ],
};

export const getHomeBanks: MockHandler = {
  url: ENDPOINTS.GET_HOME_BANKS,
  method: 'get',
  handler: () => [200, getBanksApiResponse],
};
