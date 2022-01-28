const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => console.log(`Result: ${num}`);

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(5, 12));

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printResult // Error

addAndHandle(1, 2, (result) => {
  console.log(result);
});
