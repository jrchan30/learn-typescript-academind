const add = (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number | void => {
  const result: number = n1 + n2;
  return showResult ? console.log(`${phrase}${result}`) : result;
};
const num1 = 5;
const num2 = 2.8;
add(num1, num2, true, 'Result is: ');
