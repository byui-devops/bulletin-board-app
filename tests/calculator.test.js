const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calculator.add(-1, -1)).toBe(-2);
    });

    test('should add zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should handle negative results', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should handle decimal results', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('power', () => {
    test('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should handle power of zero', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });
  });

  describe('factorial', () => {
    test('should calculate factorial of positive number', () => {
      expect(calculator.factorial(5)).toBe(120);
    });

    test('should return 1 for factorial of 0', () => {
      expect(calculator.factorial(0)).toBe(1);
    });

    test('should return 1 for factorial of 1', () => {
      expect(calculator.factorial(1)).toBe(1);
    });

    test('should throw error for negative numbers', () => {
      expect(() => calculator.factorial(-1)).toThrow('Factorial is not defined for negative numbers');
    });
  });

  describe('isPrime', () => {
    test('should return true for prime numbers', () => {
      expect(calculator.isPrime(2)).toBe(true);
      expect(calculator.isPrime(17)).toBe(true);
      expect(calculator.isPrime(97)).toBe(true);
    });

    test('should return false for non-prime numbers', () => {
      expect(calculator.isPrime(1)).toBe(false);
      expect(calculator.isPrime(4)).toBe(false);
      expect(calculator.isPrime(15)).toBe(false);
    });

    test('should return false for numbers less than 2', () => {
      expect(calculator.isPrime(1)).toBe(false);
      expect(calculator.isPrime(0)).toBe(false);
      expect(calculator.isPrime(-5)).toBe(false);
    });
  });
});
