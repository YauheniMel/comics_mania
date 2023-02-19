import styled, { css } from 'styled-components';
import { GLOBAL_COLORS } from '../../styles/colors/global';
import { pdX_normal, pdY_normal } from '../../styles/metrics/paddings';

const { white, yellow, blue } = GLOBAL_COLORS;

const VARIANTS = {
  rays: css<{ slope: number | null }>`
    & button {
      color: ${white};
      background-color: ${blue};
    }

    &:hover button {
      transition: transform 0.3s ease-out;
      transform: scale(0.75) rotate(${({ slope }) => slope}deg);
    }

    &::before,
    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
    }

    &::before {
      transform: rotate(-10deg);
      background-image: repeating-conic-gradient(
        ${yellow} 0 2deg,
        transparent 2deg 32deg
      );
    }

    &::after {
      transform: rotate(10deg);
      background-image: repeating-conic-gradient(
        ${yellow} 0 3deg,
        transparent 1deg 29deg
      );
    }

    &:hover::before,
    &:hover::after {
      transition-property: height, width, top, left, opacity;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      top: -4px;
      left: -4px;
      opacity: 1;
    }
  `,
};
export const StyledWrapper = styled.div<{
  variant: 'rays';
  slope: number | null;
}>`
  position: relative;
  display: inline-block;
  line-height: 0;

  ${({ variant }) => VARIANTS[variant]};
`;

export const StyledButton = styled.button`
  padding: ${pdY_normal} ${pdX_normal};
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;
