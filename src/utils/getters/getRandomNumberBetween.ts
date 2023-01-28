export function getRandomNumberBetween(from: number, to: number) {
  if (to <= from) return 0;

  const RANDOM_RATIO = Math.random();

  let randomNumber;

  if (to <= 0) {
    randomNumber = Math.round(RANDOM_RATIO * from);

    randomNumber = randomNumber > to ? randomNumber + to : randomNumber;
  } else if (from < 0) {
    const isNegativeNumber = +new Date() % 2;

    randomNumber = isNegativeNumber
      ? Math.round(RANDOM_RATIO * from)
      : Math.round(RANDOM_RATIO * to);
  } else {
    randomNumber = Math.round(RANDOM_RATIO * (to - from) + from);
  }

  return randomNumber;
}
