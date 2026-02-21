export type HomeCardResponse = {
  success: boolean;
  data: HomeCard[];
};
export type HomeCard = {
  id: string;
  img: string;
  title: string;
  link: string;
};
export type EditorChoiceApiResponse = {
  success: boolean;

  data: {
    id: string;
    title: string;
    cardDetails: CardDetails;
  };
};

export type CardDetails = {
  bankName: string;
  cardName: string;
  cardNumber?: string;
  bankIcon: string;
  cardImage?: string;
  applyLink?: string;
  annualFees?: string;
  renewalFees?: string;
  topCard?: boolean;
  yearlyBenifits: string;
  benifits: Benifits[];
};

export type Benifits = {
  icon: string;
  background?: string;
  title: string;
};

export type HomeCategoryApiResponse = {
  success: boolean;

  data: CategoryData[];
};
export type CategoryData = {
  id: string;
  name: string;

  bank: string;
  title: string;
  icon: string;
  category: string;
  cards: CardDetails[];
};

export interface BankData {
  id: string;
  bank: string;
  icon: string;
}

export interface BankApiResponse {
  success: boolean;
  data: BankData[];
}
export type CardsByCategoryResponse = {
  success: boolean;
  message: string;
  title: string;
  description: string;
  cardDetails: CardDetails[];
};
