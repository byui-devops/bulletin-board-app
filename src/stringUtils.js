class StringUtils {
  static reverse(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
  }

  static isPalindrome(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === this.reverse(cleaned);
  }

  static countVowels(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }

  static capitalizeWords(sentence) {
    if (typeof sentence !== 'string') {
      throw new Error('Input must be a string');
    }
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  static truncate(str, maxLength, suffix = '...') {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength - suffix.length) + suffix;
  }
}

module.exports = StringUtils;
