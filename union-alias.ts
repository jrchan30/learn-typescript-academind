type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
const combine = (
  a: Combinable,
  b: Combinable,
  resultConversion: ConversionDescriptor
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
