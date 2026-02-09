export const Icons = {
  rightArrow: require('./rightArrow.svg'),
  downArrow: require('./downArrow.png'),
} as const;

export type IconName = keyof typeof Icons;
