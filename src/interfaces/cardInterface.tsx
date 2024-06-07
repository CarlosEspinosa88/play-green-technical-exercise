import { ReactNode } from 'react';

export type CardType = {
  children: ReactNode;
  index: number;
  // eslint-disable-next-line no-unused-vars
  onSwipe: (direction: string, index: number) => void;
};
