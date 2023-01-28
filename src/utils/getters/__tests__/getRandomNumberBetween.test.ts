import { getRandomNumberBetween } from '../getRandomNumberBetween';

describe('getRandomNumberBetween', () => {
  let randomNumbers: number[] = [];
  const generateRandomNumbers = (from: number, to: number) => {
    for (let i = 0; i < 20; i++) {
      const randomNumber = getRandomNumberBetween(from, to);

      randomNumbers.push(randomNumber);
    }
  };

  beforeEach(() => {
    randomNumbers = [];
  });

  it('should returns 0 if "from" equal "to"', () => {
    expect(getRandomNumberBetween(1, 1)).toEqual(0);
    expect(getRandomNumberBetween(0, 0)).toEqual(0);
    expect(getRandomNumberBetween(-4, -4)).toEqual(0);
  });

  it('should returns 0 if from > to', () => {
    expect(getRandomNumberBetween(5, 1)).toEqual(0);
    expect(getRandomNumberBetween(-1, -5)).toEqual(0);
    expect(getRandomNumberBetween(0, -4)).toEqual(0);
  });

  it('should generate random number correctly if to < 0', () => {
    const from = -9;
    const to = -2;

    generateRandomNumbers(from, to);

    randomNumbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(from);
      expect(number).toBeLessThanOrEqual(to);
    });
  });

  it('should generate random number correctly if to = 0', () => {
    const from = -9;
    const to = 0;

    generateRandomNumbers(from, to);

    randomNumbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(from);
      expect(number).toBeLessThanOrEqual(to);
    });
  });

  it('should generate random number correctly if from < 0', () => {
    const from = -9;
    const to = 9;

    generateRandomNumbers(from, to);

    randomNumbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(from);
      expect(number).toBeLessThanOrEqual(to);
    });
  });

  it('should generate random number correctly if from and to are positive numbers', () => {
    const from = 4;
    const to = 15;

    generateRandomNumbers(from, to);

    randomNumbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(from);
      expect(number).toBeLessThanOrEqual(to);
    });
  });
});
