import { ReactNode } from 'react';

export interface IAButton {
  children: ReactNode | string;
  onClick: () => void;
  variant?: 'rays';
}
