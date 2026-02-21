export const Images = {
  logo: require('./logo.png'),
  hdfc_millenia: require('./millennia-debit-card.png'),
} as const;

export type ImageName = keyof typeof Images;
