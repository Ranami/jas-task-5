export function isEven(number) {
  return number % 2 === 0;
}

export function fibonacci(n) {
  if (n < 1) {
    return "must be higher than 0";
  }
  const fibonacciNumbers = [];
  let pastNumber = 0;
  let currentNumber = 1;
  for (let i = 1; i <= n; i++) {
    const nextNumber = pastNumber + currentNumber;
    fibonacciNumbers.push(currentNumber);
    pastNumber = currentNumber;
    currentNumber = nextNumber;
  }
  return fibonacciNumbers.join(", ");
}

export function factorial(num) {
  if (num < 0) return "Nope";
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
