const combine = (
  a: number | string,
  b: number | string,
  resultConversion: 'as-number' | 'as-text'
) => {
  if (
    (typeof a === 'number' && typeof b === 'number') ||
    resultConversion === 'as-number'
  ) {
    return +a + +b;
  }
  return a.toString() + b.toString();
};
const combinedAges = combine(30, 26, 'as-number'); // 56
const combinedStr = combine('Hello', 'Russell', 'as-text'); // Hello Russell
