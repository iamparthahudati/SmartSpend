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
