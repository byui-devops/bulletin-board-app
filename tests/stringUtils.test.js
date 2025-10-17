const StringUtils = require('../src/stringUtils');

describe('StringUtils', () => {
  describe('reverse', () => {
    test('should reverse a string', () => {
      expect(StringUtils.reverse('hello')).toBe('olleh');
    });

    test('should reverse a string with spaces', () => {
      expect(StringUtils.reverse('hello world')).toBe('dlrow olleh');
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.reverse(123)).toThrow('Input must be a string');
    });
  });

  describe('isPalindrome', () => {
    test('should return true for palindromes', () => {
      expect(StringUtils.isPalindrome('racecar')).toBe(true);
      expect(StringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('should return false for non-palindromes', () => {
      expect(StringUtils.isPalindrome('hello')).toBe(false);
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.isPalindrome(123)).toThrow('Input must be a string');
    });
  });

  describe('countVowels', () => {
    test('should count vowels in a string', () => {
      expect(StringUtils.countVowels('hello')).toBe(2);
      expect(StringUtils.countVowels('JavaScript')).toBe(3);
    });

    test('should return 0 for strings with no vowels', () => {
      expect(StringUtils.countVowels('rhythm')).toBe(0);
    });

    test('should handle uppercase vowels', () => {
      expect(StringUtils.countVowels('AEIOU')).toBe(5);
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.countVowels(123)).toThrow('Input must be a string');
    });
  });

  describe('capitalizeWords', () => {
    test('should capitalize each word in a sentence', () => {
      expect(StringUtils.capitalizeWords('hello world')).toBe('Hello World');
    });

    test('should handle mixed case input', () => {
      expect(StringUtils.capitalizeWords('hElLo WoRlD')).toBe('Hello World');
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.capitalizeWords(123)).toThrow('Input must be a string');
    });
  });

  describe('truncate', () => {
    test('should truncate long strings', () => {
      expect(StringUtils.truncate('This is a long string', 10)).toBe('This is...');
    });

    test('should not truncate short strings', () => {
      expect(StringUtils.truncate('Hello', 10)).toBe('Hello');
    });

    test('should use custom suffix', () => {
      expect(StringUtils.truncate('This is a long string', 10, '***')).toBe('This is ***');
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.truncate(123, 10)).toThrow('Input must be a string');
    });
  });
});
