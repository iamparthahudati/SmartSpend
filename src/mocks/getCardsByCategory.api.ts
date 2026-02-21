import { CardsByCategoryResponse } from '../screens/HomeScreen/type';
import { ENDPOINTS } from '../utils/constants';
import { MockHandler } from './mockTypes';

export const mockCardsByCategory: Record<string, CardsByCategoryResponse> = {
  travel: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Travel',
    description: 'Maximize your rewards with every trip',
    cardDetails: [
      {
        topCard: true,
        bankName: 'HDFC',
        cardName: 'HDFC Regalia',
        yearlyBenifits: '2,000',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '✈️', title: 'Airport lounge access' },
          { icon: '💱', title: 'Zero forex markup' },
          { icon: '⭐', title: '5x reward points on travel' },
        ],
      },
      {
        topCard: false,
        bankName: 'Axis',
        cardName: 'Axis Atlas',
        yearlyBenifits: '1,500',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🌍', title: 'EDGE Miles on every spend' },
          { icon: '🛋️', title: 'Free lounge visits' },
          { icon: '🛡️', title: 'Travel insurance cover' },
        ],
      },
      {
        topCard: false,
        bankName: 'SBI',
        cardName: 'SBI Card Elite',
        yearlyBenifits: '1,200',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🎫', title: 'Club Vistara points' },
          { icon: '🏨', title: 'International lounge access' },
          { icon: '💰', title: 'Forex benefits' },
        ],
      },
    ],
  },

  shopping: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Shopping',
    description: 'Save more on every purchase online and offline',
    cardDetails: [
      {
        topCard: true,
        bankName: 'ICICI',
        cardName: 'Amazon Pay ICICI',
        yearlyBenifits: '1,800',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '📦', title: '5% back on Amazon' },
          { icon: '🏪', title: '2% on partner merchants' },
          { icon: '🆓', title: 'No annual fee' },
        ],
      },
      {
        topCard: false,
        bankName: 'Axis',
        cardName: 'Flipkart Axis Bank',
        yearlyBenifits: '1,200',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🛒', title: '5% back on Flipkart' },
          { icon: '👗', title: '4% on Myntra' },
          { icon: '💳', title: '1.5% on all others' },
        ],
      },
      {
        topCard: false,
        bankName: 'HDFC',
        cardName: 'HDFC Millennia',
        yearlyBenifits: '650',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '💰', title: '5% cashback on top platforms' },
          { icon: '🎁', title: 'Quarterly cashback credit' },
          { icon: '🛋️', title: 'Lounge access' },
        ],
      },
    ],
  },

  dining: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Dining',
    description: 'Enjoy every meal with great rewards',
    cardDetails: [
      {
        topCard: true,
        bankName: 'HDFC',
        cardName: 'Swiggy HDFC Bank',
        yearlyBenifits: '1,500',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🍕', title: '10% cashback on Swiggy' },
          { icon: '🍔', title: '5% on online food orders' },
          { icon: '🎉', title: 'Free Swiggy One membership' },
        ],
      },
      {
        topCard: false,
        bankName: 'RBL',
        cardName: 'Zomato RBL Edition',
        yearlyBenifits: '1,000',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🍱', title: '10% off on Zomato' },
          { icon: '⭐', title: 'Free Zomato Pro' },
          { icon: '🍽️', title: 'Dining rewards at restaurants' },
        ],
      },
      {
        topCard: false,
        bankName: 'Kotak',
        cardName: 'Kotak Dining Card',
        yearlyBenifits: '800',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🏷️', title: '15% off at partner restaurants' },
          { icon: '2️⃣', title: '2x points on dining' },
          { icon: '📅', title: 'Weekend dining bonuses' },
        ],
      },
    ],
  },

  fuel: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Fuel',
    description: 'Save on every refuel with top fuel cards',
    cardDetails: [
      {
        topCard: true,
        bankName: 'SBI',
        cardName: 'BPCL SBI Card',
        yearlyBenifits: '1,200',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '⛽', title: '4.25% value back on BPCL fuel' },
          { icon: '🚫', title: 'Fuel surcharge waiver' },
          { icon: '⭐', title: 'Reward points on every refuel' },
        ],
      },
      {
        topCard: false,
        bankName: 'Axis',
        cardName: 'IndianOil Axis',
        yearlyBenifits: '900',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '💰', title: '4% fuel savings' },
          { icon: '🔖', title: '1% surcharge waiver' },
          { icon: '🎯', title: 'EDGE reward points' },
        ],
      },
      {
        topCard: false,
        bankName: 'ICICI',
        cardName: 'HPCL Coral ICICI',
        yearlyBenifits: '750',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '⛽', title: '2.5% cashback on HPCL fuel' },
          { icon: '🚫', title: 'Surcharge waiver' },
          { icon: '🔄', title: 'Payback points on spend' },
        ],
      },
    ],
  },

  entertainment: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Entertainment',
    description: 'Get more out of movies, OTT and events',
    cardDetails: [
      {
        topCard: true,
        bankName: 'Axis',
        cardName: 'Axis Ace',
        yearlyBenifits: '1,000',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '💳', title: '2% cashback on all spends' },
          { icon: '📱', title: 'Google Pay 5% rewards' },
          { icon: '📺', title: 'Free OTT subscriptions' },
        ],
      },
      {
        topCard: false,
        bankName: 'ICICI',
        cardName: 'ICICI Coral',
        yearlyBenifits: '800',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🎬', title: 'Buy 1 Get 1 on BookMyShow' },
          { icon: '🍿', title: '2 free movies per month' },
          { icon: '🍽️', title: 'Dining discounts' },
        ],
      },
      {
        topCard: false,
        bankName: 'SBI',
        cardName: 'SBI SimplyCLICK',
        yearlyBenifits: '600',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🎯', title: '10x points on OTT platforms' },
          { icon: '🛒', title: 'Amazon & Cleartrip rewards' },
          { icon: '🔄', title: 'Annual fee reversal on spends' },
        ],
      },
    ],
  },

  cashback: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Cashback',
    description: 'Earn real money back on every transaction',
    cardDetails: [
      {
        topCard: true,
        bankName: 'Axis',
        cardName: 'Axis Ace',
        yearlyBenifits: '1,000',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '💰', title: '2% flat cashback on all spends' },
          { icon: '♾️', title: 'No cap on cashback earned' },
          { icon: '📱', title: 'Google Pay 5% back' },
        ],
      },
      {
        topCard: false,
        bankName: 'HDFC',
        cardName: 'HDFC Millennia',
        yearlyBenifits: '650',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🛒', title: '5% cashback on top platforms' },
          { icon: '📅', title: 'Quarterly cashback credit' },
          { icon: '🛋️', title: 'Lounge access included' },
        ],
      },
      {
        topCard: false,
        bankName: 'Kotak',
        cardName: 'Kotak Cashback Card',
        yearlyBenifits: '500',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🍕', title: 'Flat 10% on Swiggy & Zomato' },
          { icon: '🛒', title: '7.5% on BigBasket' },
          { icon: '💳', title: '1% on all other spends' },
        ],
      },
    ],
  },

  healthcare: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Healthcare',
    description: 'Save on medical expenses and pharmacy bills',
    cardDetails: [
      {
        topCard: true,
        bankName: 'HDFC',
        cardName: 'HDFC Health Plus',
        yearlyBenifits: '1,000',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🏥', title: '10% off at partner hospitals' },
          { icon: '💊', title: '5% cashback on pharmacy' },
          { icon: '🩺', title: 'Free health checkup annually' },
        ],
      },
      {
        topCard: false,
        bankName: 'SBI',
        cardName: 'SBI Arogya Plus',
        yearlyBenifits: '800',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🏨', title: 'Cashless hospitalization' },
          { icon: '💉', title: 'Reward points on medical spends' },
          { icon: '📋', title: 'Health insurance benefits' },
        ],
      },
    ],
  },

  education: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Education',
    description: 'Invest in learning and earn rewards',
    cardDetails: [
      {
        topCard: true,
        bankName: 'ICICI',
        cardName: 'ICICI Edu Card',
        yearlyBenifits: '700',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🎓', title: '5% cashback on course fees' },
          { icon: '📚', title: 'Rewards on book purchases' },
          { icon: '💻', title: 'Discounts on ed-tech platforms' },
        ],
      },
      {
        topCard: false,
        bankName: 'Kotak',
        cardName: 'Kotak Scholar',
        yearlyBenifits: '500',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🏫', title: 'EMI on school/college fees' },
          { icon: '📖', title: '3x points on stationery' },
          { icon: '🎯', title: 'Exam fee cashback' },
        ],
      },
    ],
  },

  utilities: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Utilities',
    description: 'Save on electricity, water and bill payments',
    cardDetails: [
      {
        topCard: true,
        bankName: 'SBI',
        cardName: 'SBI SimplySAVE',
        yearlyBenifits: '600',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '💡', title: '10x points on utility bills' },
          { icon: '📱', title: 'Mobile recharge rewards' },
          { icon: '🔄', title: 'Auto-pay bill discounts' },
        ],
      },
      {
        topCard: false,
        bankName: 'Axis',
        cardName: 'Axis My Zone',
        yearlyBenifits: '500',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🏠', title: '5% off on utility payments' },
          { icon: '💧', title: 'Water bill cashback' },
          { icon: '⚡', title: 'Electricity bill rewards' },
        ],
      },
    ],
  },

  rewards: {
    success: true,
    message: 'Cards fetched successfully',
    title: 'Best Cards for Rewards',
    description: 'Earn and redeem points on every spend',
    cardDetails: [
      {
        topCard: true,
        bankName: 'HDFC',
        cardName: 'HDFC Diners Black',
        yearlyBenifits: '5,000',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '⭐', title: '10x reward points on dining' },
          { icon: '✈️', title: 'Air mile conversions' },
          { icon: '🎁', title: 'Exclusive redemption catalog' },
        ],
      },
      {
        topCard: false,
        bankName: 'Amex',
        cardName: 'Amex Membership Rewards',
        yearlyBenifits: '3,000',
        cardImage: '',
        bankIcon: '',
        benifits: [
          { icon: '🏆', title: '1000 bonus points monthly' },
          { icon: '🛒', title: '5x points on partner brands' },
          { icon: '🔄', title: 'Flexible point transfers' },
        ],
      },
    ],
  },
};

export const getCardsByCategory: MockHandler = {
  url: `${ENDPOINTS.GET_CARDS_BY_CATEGORY}/:categoryId`,
  method: 'get',
  handler: ((config: any) => {
    const categoryName = config.url?.split('/').pop() ?? '';
    return [200, mockCardsByCategory[categoryName]];
  }) as () => [number, any],
};
