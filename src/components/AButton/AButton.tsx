import { FC, useState } from 'react';
import { IAButton } from './type';
import { StyledButton, StyledWrapper } from './AButton.styles';
import { getRandomNumberBetween } from '../../utils/getters/getRandomNumberBetween';

const MIN_SLOPE_DEGREE = -9;
const MAX_SLOPE_DEGREE = 9;

export const AButton: FC<IAButton> = ({
  children,
  onClick,
  variant = 'rays',
}) => {
  const [slope, setSlope] = useState<number | null>(null);

  const handleMouseOverSetSlope = () => {
    if (slope !== null) {
      return false;
    }

    setSlope(getRandomNumberBetween(MIN_SLOPE_DEGREE, MAX_SLOPE_DEGREE));
  };

  const handleMouseLeaveCleanSlope = () => {
    setSlope(null);
  };

  return (
    <StyledWrapper
      onMouseOver={handleMouseOverSetSlope}
      onMouseLeave={handleMouseLeaveCleanSlope}
      slope={slope}
      variant={variant}
    >
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </StyledWrapper>
  );
};
