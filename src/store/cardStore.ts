import { create } from 'zustand';

type CardState = {
  result: any;
  setResult: (r: any) => void;
};

export const useCardStore = create<CardState>(set => ({
  result: null,
  setResult: result => set({ result }),
}));
